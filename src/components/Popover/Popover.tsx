import ClickListener from "carbon-components-react/lib/internal/InnerClickListener";
import empty from "empty";
import PopperJS from "popper.js";
import React, { memo, Ref, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "react-emotion";
import usePopper from "../../hooks/usePopper";

// Adding this div to get around some madness with IE: https://github.com/philipwalton/flexbugs/issues/216

export interface IProps {
  /** The reference element. Make sure to pass the ref into the appropriate element. This ref will be used to measure and place the popover */
  reference: (args: { ref: Ref<any> }) => React.ReactNode;
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
  /** Adjust offset from left. */
  offsetLeft?: number;
  /** Node to use to determine boundaries. */
  boundariesElement?: PopperJS.Boundary | HTMLElement;
}

const IEFixer = styled("div")`
  display: flex;
  flex-direction: row;
`;

export const Popover: React.FunctionComponent<IProps> = ({
  reference,
  children,
  show,
  placement,
  onClickOutside = empty.func,
  preventOverflow = true,
  offsetTop = 0,
  offsetLeft = 0,
  boundariesElement = "viewport"
}) => {
  const referenceRef = useRef(null);
  const popperRef = useRef(null);
  const arrowRef = useRef(null);

  const { style, placement: pOut, outOfBoundaries } = usePopper(
    {
      placement,
      referenceRef,
      popperRef,
      arrowRef,
      modifiers: {
        preventOverflow: { enabled: preventOverflow, boundariesElement },
        offset: {
          offset: `${offsetLeft}, ${offsetTop}`
        }
      }
    },
    [children]
  );
  return (
    <>
      {reference({ ref: referenceRef })}
      {show &&
        ReactDOM.createPortal(
          <ClickListener onClickOutside={onClickOutside} refKey="innerRef">
            <IEFixer>
              <div
                ref={popperRef}
                style={{ ...style, zIndex: 9999 }}
                data-placement={pOut}
                data-out-of-boundaries={outOfBoundaries}
              >
                {children}
              </div>
            </IEFixer>
          </ClickListener>,
          document.querySelector("body")
        )}
    </>
  );
};

export default memo(Popover);
