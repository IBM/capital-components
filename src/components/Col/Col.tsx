import React from "react";
import {
  createColClass as col,
  SupportedSizes,
  buildVirticalSpacing,
  SupportedHeights
} from "../../layout/grid";
import { Flex } from "../../primitives/elements";
import { cx, css } from "emotion";
import { BreakPointDescriptor } from "../../layout/mediaQueries";

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  /** A fraction (1/12, 1/3, etc) to fit the column into the grid. Also can specify
   * it for specific breakpoint: { sm: "1/2", md: "1/3" }
   */
  size?: SupportedSizes;
  /** Row height of column entry, is multiplied by our row height preset (according to css-gridish.json - 0.5rem == 8px) */
  height?: SupportedHeights;
  /** Additional vertical padding. Format string to match spacing format. See README for details */
  verticalPadding?: string | BreakPointDescriptor<string>;
  /** Additional vertical margin. Format string to match spacing format. See README for details */
  verticalMargin?: string | BreakPointDescriptor<string>;
  /** Useful setting to make the contents row/column aligned (flex-direction) */
  flexDirection?: "column" | "row";
  /** Useful setting alignment */
  flexAlignment?: string;
}

export const Col: React.SFC<IProps> = ({
  size,
  height,
  verticalPadding,
  verticalMargin,
  className,
  flexDirection,
  flexAlignment,
  ...props
}) => (
  <Flex
    direction={flexDirection || "column"}
    alignment={flexAlignment}
    className={cx(
      className,
      col({
        size,
        height
      }),
      css(buildVirticalSpacing(verticalPadding)),
      css(buildVirticalSpacing(verticalMargin, "margin"))
    )}
    {...props}
  />
);

export default Col;
