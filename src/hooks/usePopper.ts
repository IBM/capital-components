import PopperJS, { PopperOptions } from "popper.js";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";

// Experiment implementation of popper.js using hooks.

export interface IInputOptions extends PopperOptions {
  referenceRef: RefObject<any>;
  popperRef: RefObject<any>;
  arrowRef: RefObject<any>;
}

const defaultOpts: PopperOptions = {
  placement: "bottom",
  eventsEnabled: true,
  positionFixed: false
};

const initialStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: "none"
};

const initialArrowStyle = {};
// tslint:disable-next-line: no-empty
const noop = () => {};

export default function usePopper(inputOpts: IInputOptions, inputs = []) {
  const opts = { ...defaultOpts, ...inputOpts };
  const { referenceRef, popperRef, arrowRef } = opts;
  const [state, setState] = useState({
    data: undefined,
    placement: undefined
  });
  const popperInstance = useRef(null);

  const callbackFn = useCallback(data => {
    const { placement } = data;
    setState({ data, placement });
    return data;
  }, []);

  useEffect(
    () => {
      // A placement difference in state means popper determined a new placement
      // apart from the opts value. By the time the popper element is rendered with
      // the new position Popper has already measured it, if the place change triggers
      // a size change it will result in a misaligned popper. So we schedule an update to be sure.
      if (popperInstance.current) {
        popperInstance.current.scheduleUpdate();
      }
    },
    [state.placement]
  );

  useEffect(() => {
    if (referenceRef.current && popperRef.current) {
      popperInstance.current = new PopperJS(referenceRef.current, popperRef.current, {
        placement: opts.placement,
        eventsEnabled: opts.eventsEnabled,
        positionFixed: opts.positionFixed,
        modifiers: {
          ...opts.modifiers,
          arrow: {
            ...(opts.modifiers && opts.modifiers.arrow),
            enabled: !!(arrowRef && arrowRef.current),
            element: arrowRef && arrowRef.current
          },
          applyStyle: { enabled: false },
          updateStateModifier: {
            enabled: true,
            order: 900,
            fn: callbackFn
          }
        }
      });
    }

    return () => {
      if (popperInstance.current) {
        popperInstance.current.destroy();
        popperInstance.current = null;
      }
    };
  }, inputs);

  const style =
    !popperRef.current || !state.data
      ? initialStyle
      : {
          position: state.data.offsets.popper.position,
          ...state.data.styles
        };

  const arrowStyle = !arrowRef.current || !state.data ? initialArrowStyle : state.data.arrowStyles;

  return {
    style,
    placement: state.placement,
    outOfBoundaries: state.data && state.data.hide,
    scheduleUpdate:
      popperInstance && popperInstance.current ? popperInstance.current.scheduleUpdate : noop,
    arrowStyle
  };
}
