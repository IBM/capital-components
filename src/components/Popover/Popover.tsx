import React, { Ref } from "react";
import { Manager, Popper, Reference } from "react-popper";
import PopperJS from "popper.js";
import ClickListener from "carbon-components-react/es/internal/InnerClickListener";
import styled from "react-emotion";
import ReactDOM from "react-dom";
import empty from "empty";

// Adding this div to get around some madness with IE: https://github.com/philipwalton/flexbugs/issues/216
const IEFixer = styled("div")`
  display: flex;
  flex-direction: row;
`;

export interface IProps {
  /** The reference element. Make sure to pass the ref into the appropriate element. This ref will be used to measure and place the popover */
  reference: ({ ref }: { ref: Ref<any> }) => React.ReactNode;
  /** The placement/orientation of the popover. See PopperJS docs for details. */
  placement: PopperJS.Placement;
  /** The contents of the popover. */
  children: React.ReactNode;
  /** To show or hide the popover. */
  show: boolean;
  /** css classname */
  className?: string;
  /** event to trigger on clicking outside of popover when open. */
  onClickOutside?: (ev: MouseEvent) => void;
  /** If edge of popover is invisible, push into view. */
  preventOverflow?: boolean;
  /** Adjust offset from top. */
  offsetTop?: number;
  /** Adjust offset from bottom. */
  offsetLeft?: number;
}

export const Popover: React.SFC<IProps> = ({
  reference,
  children,
  show,
  placement,
  onClickOutside = empty.func,
  preventOverflow = true,
  offsetTop = 0,
  offsetLeft = 0
}) => (
  <Manager>
    <Reference>{reference}</Reference>
    {show &&
      ReactDOM.createPortal(
        <Popper
          placement={placement}
          modifiers={{
            preventOverflow: { enabled: preventOverflow },
            offset: {
              offset: `${offsetLeft}, ${offsetTop}`
            }
          }}
        >
          {({ ref, style, placement }) => (
            <div ref={ref} style={{ ...style, zIndex: 9999 }} data-placement={placement}>
              <ClickListener onClickOutside={onClickOutside} refKey="innerRef">
                <IEFixer>{children}</IEFixer>
              </ClickListener>
            </div>
          )}
        </Popper>,
        document.querySelector("body")
      )}
  </Manager>
);

export default Popover;
