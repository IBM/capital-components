import { cx } from "emotion";
import React, { FC } from "react";
import { mqStrings, mqStringsMax } from "../../layout/mediaQueries";
import { styled } from "../../support/theme";
import { Omit } from "type-zoo/types";

/* istanbul ignore next */
/**
 * We have this wrapper because the carbon dropdown wants to shrink a lot.
 * This wrapper prevents that.
 */
const DropdownWrapperInternal = styled.div`
  ${mqStringsMax.s(`
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  `)}
  ${mqStrings.s(`
    min-width: 240px;
  `)}
`;

// /* istanbul ignore next */
const DropdownWrapper: FC<
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">
> = ({ className, ...props }) => (
  <DropdownWrapperInternal
    className={cx(className, "cap-padding--horizontal", "cap-dropdown-wrapper")}
    {...props}
  />
);

export default DropdownWrapper;
