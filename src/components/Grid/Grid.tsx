import { css, cx } from "emotion";
import React from "react";
import { buildVerticalSpacing, createGridClass as grid } from "../../layout/grid";
import { IBreakPointDescriptor } from "../../layout/mediaQueries";

const preventShrinkStyle = css`
  flex-shrink: 0;
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
}

export const Grid: React.SFC<IProps> = ({
  isContainer = false,
  isFixedColumns = false,
  isFluidRows = false,
  className,
  verticalPadding,
  verticalMargin,
  preventShrink = true,
  ...props
}) => (
  <div
    className={cx(
      className,
      grid({
        isContainer,
        isFixedColumns,
        isFluidRows
      }),
      css(buildVerticalSpacing(verticalPadding)),
      css(buildVerticalSpacing(verticalMargin, "margin")),
      {
        [preventShrinkStyle]: preventShrink
      }
    )}
    {...props}
  />
);

export default Grid;
