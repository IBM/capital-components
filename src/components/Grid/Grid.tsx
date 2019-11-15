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

type GridClassProps = Parameters<typeof grid>[0];

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  /** use condensed grid. */
  isCondensed?: boolean;
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
  isCondensed = false,
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
        isCondensed
      }),
      css(buildVerticalSpacing(verticalPadding)),
      css(buildVerticalSpacing(verticalMargin, "margin")),
      {
        [preventShrinkStyle]: preventShrink,
        [allowGrowStyle]: !isIE && allowGrow
      },
      css`
        width: 100%;
      `,
      className
    )}
    {...props}
  />
);

export default Grid;
