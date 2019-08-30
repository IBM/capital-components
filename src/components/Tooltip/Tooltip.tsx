import PopperJS from "popper.js";
import React from "react";
import ReactDOM from "react-dom";
import useClickOutside from "../../hooks/useClickOutside";
import usePopper from "../../hooks/usePopper";
import { useDebounce } from "react-use";
import { css, cx } from "emotion";

const tooltipOverrides = css`
  .bx--tooltip__caret {
    left: unset;
    right: unset;
  }
`;

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
  const [popper, setPopper] = React.useState<HTMLElement>(null);
  const arrowRef = React.useRef<HTMLSpanElement>(null);
  const [isOpen, setIsOpen] = React.useState(initialOpen);
  const [hoverInfo, setHoverInfo] = React.useState<{ state: State; relatedTarget: EventTarget }>({
    state: "out",
    relatedTarget: null
  });
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
      popperRef: { current: popper },
      arrowRef,
      modifiers: {
        preventOverflow: { enabled: true, boundariesElement: "viewport" },
        offset: {
          offset: "0, 6"
        }
      }
    },
    [content]
  );
  useClickOutside({ current: popper }, () => {
    /* istanbul ignore next */
    if (clickToOpen) {
      setIsOpen(false);
    }
  });
  useDebounce(
    () => {
      if (hoverInfo.state === "over") {
        setIsOpen(true);
      } else {
        // Note: SVGElement in IE11 does not have `.contains()`
        /* istanbul ignore next */
        const shouldPreventClose =
          hoverInfo.relatedTarget &&
          ((referenceRef.current &&
            referenceRef.current.contains &&
            referenceRef.current.contains(hoverInfo.relatedTarget as Node)) ||
            (popper && popper.contains(hoverInfo.relatedTarget as Node)));
        /* istanbul ignore next */
        if (!shouldPreventClose) {
          setIsOpen(false);
        }
      }
    },
    delayInMs,
    [hoverInfo]
  );

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
      setHoverInfo({ state, relatedTarget: e.relatedTarget });
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
    className: cx("bx--tooltip bx--tooltip--shown", tooltipOverrides),
    onMouseOver: handleMouse,
    onMouseOut: handleMouse,
    onFocus: handleMouse,
    onBlur: handleMouse,
    onContextMenu: handleMouse,
    role: "tooltip",
    ref: node => setPopper(node),
    style,
    id: tooltipId.current,
    "aria-labelledby": triggerId.current,
    "data-floating-menu-direction": pOut
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
            <span
              className="bx--tooltip__caret"
              ref={arrowRef}
              style={{
                ...arrowStyle,
                top: undefined
              }}
            />
            {content}
          </div>,
          document.getElementsByTagName("body")[0]
        )}
    </>
  );
}
