import PopperJS from "popper.js";
import React from "react";
import ReactDOM from "react-dom";
import { Manager, Popper, Reference } from "react-popper";
import debounce from "lodash.debounce";
import ClickListener from "carbon-components-react/lib/internal/InnerClickListener";
import { styled } from "../../support/theme";

// Adding this div to get around some madness with IE: https://github.com/philipwalton/flexbugs/issues/216
const IEFixer = styled("div")`
  display: flex;
  flex-direction: row;
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

export default class Tooltip<R extends HTMLElement = HTMLDivElement> extends React.PureComponent<
  IProps<R>,
  {
    isOpen: boolean;
  }
> {
  static defaultProps = {
    delayInMs: 200
  };

  referenceRef = null;
  popperRef = null;
  triggerId =
    this.props.id ||
    `__carbon-tooltip-trigger_${Math.random()
      .toString(36)
      .substr(2)}`;
  tooltipId = `__carbon-tooltip_${Math.random()
    .toString(36)
    .substr(2)}`;

  state = {
    isOpen: this.props.initialOpen
  };

  handleHover = (state: State, relatedTarget: HTMLElement) => {
    if (state === "over") {
      this.setState({ isOpen: true });
    } else {
      // Note: SVGElement in IE11 does not have `.contains()`
      /* istanbul ignore next */
      const shouldPreventClose =
        relatedTarget &&
        ((this.referenceRef &&
          this.referenceRef.contains &&
          this.referenceRef.contains(relatedTarget)) ||
          (this.popperRef && this.popperRef.contains(relatedTarget)));
      /* istanbul ignore next */
      if (!shouldPreventClose) {
        this.setState({ isOpen: false });
      }
    }
  };
  debouncedHandleHover = debounce(this.handleHover, this.props.delayInMs);

  handleMouse = (e: React.MouseEvent<R> | React.FocusEvent<R>) => {
    const state: State = {
      mouseover: "over",
      mouseout: "out",
      focus: "over",
      blur: "out",
      click: "click"
    }[e.type];
    const { clickToOpen } = this.props;
    /* istanbul ignore next */
    if (clickToOpen) {
      if (state === "click") {
        e.nativeEvent.stopImmediatePropagation();
        e.stopPropagation();
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
      }
    } else if (state) {
      this.debouncedHandleHover(state, e.relatedTarget);
    }
  };

  onClickOutside = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { children, placement: outerPlacement, content, as = "div" } = this.props;
    const { isOpen } = this.state;

    return (
      <Manager>
        <Reference>
          {({ ref }) => {
            const getReferenceProps = () => ({
              ref: node => {
                this.referenceRef = node;
                ref(node);
              },
              onClick: this.handleMouse,
              onMouseOver: this.handleMouse,
              onMouseOut: this.handleMouse,
              onFocus: this.handleMouse,
              onBlur: this.handleMouse,
              // insert aria props here
              "aria-owns": isOpen ? this.tooltipId : undefined,
              "aria-haspopup": true,
              "aria-expanded": isOpen,
              id: this.triggerId
            });
            return typeof children === "function"
              ? (children as any)({
                  getReferenceProps
                })
              : React.createElement(as, getReferenceProps(), children);
          }}
        </Reference>
        {isOpen &&
          ReactDOM.createPortal(
            <Popper
              placement={outerPlacement}
              modifiers={{
                preventOverflow: { enabled: true }
              }}
            >
              {({ ref, style, arrowProps }) => {
                const popoverProps: any = {
                  className: "bx--tooltip bx--tooltip--shown",
                  onMouseOver: this.handleMouse,
                  onMouseOut: this.handleMouse,
                  onFocus: this.handleMouse,
                  onBlur: this.handleMouse,
                  onContextMenu: this.handleMouse,
                  role: "tooltip",
                  ref: node => {
                    this.popperRef = node;
                    ref(node);
                  },
                  style,
                  id: this.tooltipId,
                  "aria-labelledby": this.triggerId
                };
                return (
                  <div {...popoverProps}>
                    <ClickListener onClickOutside={this.onClickOutside} refKey="innerRef">
                      <IEFixer>
                        <span className="bx--tooltip__caret" {...arrowProps} />
                        {content}
                      </IEFixer>
                    </ClickListener>
                  </div>
                );
              }}
            </Popper>,
            document.getElementsByTagName("body")[0]
          )}
      </Manager>
    );
  }
}
