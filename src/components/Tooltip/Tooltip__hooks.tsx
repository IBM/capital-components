import PopperJS from "popper.js";
import React from "react";
import ReactDOM from "react-dom";
// To use, re-add "use-debounce" to dependencies
import useDebouncedCallback from "use-debounce/lib/callback";
import useClickOutside from "../../hooks/useClickOutside";
import usePopper from "../../hooks/usePopper";

export interface IRenderProps<R extends HTMLElement = any> {
  getReferenceProps: () => {
    ref: React.Ref<R>;
    onClick: React.MouseEventHandler<R>;
    onMouseOver: React.MouseEventHandler<R>;
    onMouseOut: React.MouseEventHandler<R>;
    onFocus: React.FocusEventHandler<R>;
    onBlur: React.FocusEventHandler<R>;
  };
  placement: PopperJS.Placement;
  outOfBoundaries: boolean;
}

export interface IProps<R extends HTMLElement = any> {
  /** The desired placement of the tooltip. If offscreen, it will be adjusted. */
  placement: PopperJS.Placement;
  /** RenderProp to create the reference element */
  children: ((args: IRenderProps<R>) => React.ReactNode) | React.ReactNode;
  /** Content of the tooltip */
  content: React.ReactNode;
  /** Enable this if you want the tooltip to appear on click rather than hober. */
  clickToOpen?: boolean;
  /** Optional id, used to link reference element to tooltip. If not provided, one will be generated. */
  id?: string;
  /** Whether this popover starts open or not */
  initialOpen?: boolean;
  /** Hover delay in ms. Defaults to 200 */
  delayInMs?: number;
  /** Element to render if children is not a function. Defaults to "div" */
  as?: keyof React.ReactHTML;
}

type State = "hover" | "out" | "over" | "click";

export default function Tooltip<R extends HTMLElement = HTMLDivElement>({
  delayInMs = 200,
  initialOpen,
  id,
  placement,
  content,
  clickToOpen,
  children,
  as = "div"
}: IProps<R>) {
  const referenceRef = React.useRef<R>(null);
  const popperRef = React.useRef<HTMLDivElement>(null);
  const arrowRef = React.useRef<HTMLSpanElement>(null);
  const [isOpen, setIsOpen] = React.useState(initialOpen);
  const triggerId = React.useRef(
    id ||
      `__carbon-tooltip-trigger_${Math.random()
        .toString(36)
        .substr(2)}`
  );
  const tooltipId = React.useRef(
    `__carbon-tooltip_${Math.random()
      .toString(36)
      .substr(2)}`
  );
  const { style, placement: pOut, outOfBoundaries, arrowStyle } = usePopper(
    {
      placement,
      referenceRef,
      popperRef,
      arrowRef,
      modifiers: { preventOverflow: { enabled: true } }
    },
    [content, referenceRef.current, popperRef.current]
  );
  useClickOutside(popperRef, () => {
    /* istanbul ignore next */
    if (clickToOpen) {
      setIsOpen(false);
    }
  });

  const handleHover = (state: State, relatedTarget: HTMLElement) => {
    if (state === "over") {
      setIsOpen(true);
    } else {
      // Note: SVGElement in IE11 does not have `.contains()`
      /* istanbul ignore next */
      const shouldPreventClose =
        relatedTarget &&
        ((referenceRef.current &&
          referenceRef.current.contains &&
          referenceRef.current.contains(relatedTarget)) ||
          (popperRef.current && popperRef.current.contains(relatedTarget)));
      /* istanbul ignore next */
      if (!shouldPreventClose) {
        setIsOpen(false);
      }
    }
  };
  const [debouncedHandleHover] = useDebouncedCallback(handleHover, delayInMs, [isOpen, delayInMs]);

  const handleMouse = (e: React.MouseEvent<R> | React.FocusEvent<R>) => {
    const state: State = {
      mouseover: "over",
      mouseout: "out",
      focus: "over",
      blur: "out",
      click: "click"
    }[e.type];
    /* istanbul ignore next */
    if (clickToOpen) {
      if (state === "click") {
        e.nativeEvent.stopImmediatePropagation();
        e.stopPropagation();
        setIsOpen(prevState => !prevState);
      }
    } else if (state) {
      debouncedHandleHover(state, e.relatedTarget);
    }
  };

  const getReferenceProps = () => ({
    ref: referenceRef,
    onClick: handleMouse,
    onMouseOver: handleMouse,
    onMouseOut: handleMouse,
    onFocus: handleMouse,
    onBlur: handleMouse,
    "data-placement": pOut,
    // insert aria props here
    "aria-owns": isOpen ? tooltipId.current : undefined,
    "aria-haspopup": true,
    "aria-expanded": isOpen,
    id: triggerId.current
  });

  const popoverProps: any = {
    className: "bx--tooltip bx--tooltip--shown",
    onMouseOver: handleMouse,
    onMouseOut: handleMouse,
    onFocus: handleMouse,
    onBlur: handleMouse,
    onContextMenu: handleMouse,
    role: "tooltip",
    ref: popperRef,
    style,
    id: tooltipId.current,
    "aria-labelledby": triggerId.current
  };

  return (
    <>
      {typeof children === "function"
        ? children({
            getReferenceProps,
            placement: pOut,
            outOfBoundaries
          })
        : React.createElement(as, getReferenceProps(), children)}
      {isOpen &&
        ReactDOM.createPortal(
          <div {...popoverProps}>
            <span className="bx--tooltip__caret" ref={arrowRef} style={arrowStyle} />
            {content}
          </div>,
          document.getElementsByTagName("body")[0]
        )}
    </>
  );
}
