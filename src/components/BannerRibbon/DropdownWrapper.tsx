import { cx } from "emotion";
import React, { ComponentPropsWithoutRef } from "react";
import { mqStrings } from "../../layout/mediaQueries";
import { styled } from "../../support/theme";

/* istanbul ignore next */
/**
 * We have this wrapper because the carbon dropdown wants to shrink a lot.
 * This wrapper prevents that.
 */
const DropdownWrapperInternal = styled.div`
  ${mqStrings.base(`
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  `)}
  ${mqStrings.s(`
    min-width: 240px;
  `)}
`;

// /* istanbul ignore next */
const DropdownWrapper = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof DropdownWrapperInternal>) => (
  <DropdownWrapperInternal className={cx(className, "cap-padding--horizontal")} {...props} />
);

export default DropdownWrapper;
