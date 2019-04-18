import { css, cx } from "emotion";
import React from "react";
import { buildVerticalSpacing, createGridClass as grid } from "../../layout/grid";
import { IBreakPointDescriptor } from "../../layout/mediaQueries";
import { detect } from "detect-browser";

const browser = detect();
/* istanbul ignore next */
const isIE = browser && browser.name === "ie";

const preventShrinkStyle = css`
  flex-shrink: 0;
`;

const allowGrowStyle = css`
  flex-grow: 1;
`;

const preventOverflow = css`
  overflow: hidden;
`;

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  /** If true, add padding on the left and right ~5%. Only use for outer elements. */
  isContainer?: boolean;
  /** If true, column widths will be fixed pixel width (1/12 of optimal screen size). */
  isFixedColumns?: boolean;
  /** If true, row heights will be in chunks similar to columns. */
  isFluidRows?: boolean;
  /** Additional vertical padding. Format string to match spacing format. See README for details */
  verticalPadding?: string | IBreakPointDescriptor<string>;
  /** Additional vertical margin. Format string to match spacing format. See README for details */
  verticalMargin?: string | IBreakPointDescriptor<string>;
  /** If true, the grid will only expand and can't shrink (sets flex-shrink: 0) */
  preventShrink?: boolean;
  /** If true, the grid try to fit available space. Note that this is not supported by IE. (sets flex-grow: 1). Defaults to false. */
  allowGrow?: boolean;
}

export const Grid: React.SFC<IProps> = ({
  isContainer = false,
  isFixedColumns = false,
  isFluidRows = false,
  className,
  verticalPadding,
  verticalMargin,
  preventShrink = true,
  allowGrow = false,
  ...props
}) => (
  <div
    className={cx(
      preventOverflow,
      grid({
        isContainer,
        isFixedColumns,
        isFluidRows
      }),
      css(buildVerticalSpacing(verticalPadding)),
      css(buildVerticalSpacing(verticalMargin, "margin")),
      {
        [preventShrinkStyle]: preventShrink,
        [allowGrowStyle]: !isIE && allowGrow
      },
      className
    )}
    {...props}
  />
);

export default Grid;
