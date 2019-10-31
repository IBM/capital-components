import { cx } from "emotion";
import React from "react";
import { mqStrings, mqStringsMax } from "../../layout/mediaQueries";
import { styled } from "../../support/theme";

const Internal = React.forwardRef<HTMLDivElement, JSX.IntrinsicElements["div"]>(
  ({ className, ...props }, ref) => (
    <div className={cx("bx--col", "cap-dropdown-wrapper", className)} {...props} ref={ref} />
  )
);

/* istanbul ignore next */
const DropdownWrapper = styled<
  JSX.IntrinsicElements["div"] & { innerRef?: React.Ref<HTMLDivElement> }
>(Internal)(`
  ${mqStringsMax.md(`
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  `)}
  ${mqStrings.md(`
    min-width: 240px;
  `)}
`);

/**
 * We have this wrapper because the carbon dropdown wants to shrink a lot.
 * This wrapper prevents that.
 */
export default DropdownWrapper;
