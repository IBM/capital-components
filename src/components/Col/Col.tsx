import React from "react";
import {
  createColClass as col,
  SupportedSizes,
  buildVirticalPaddingFromString,
  SupportedHeights
} from "../../layout/grid";
import { Flex } from "../../primitives/elements";
import { cx, css } from "emotion";

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  /** A fraction (1/12, 1/3, etc) to fit the column into the grid. Also can specify
   * it for specific breakpoint: { sm: "1/2", md: "1/3" }
   */
  size?: SupportedSizes;
  /** Row height of column entry, is multiplied by our row height preset (according to css-gridish.json - 0.5rem == 8px) */
  height?: SupportedHeights;
  /** Additional vertical padding. Format string to match spacing format. See README for details */
  verticalPadding?: string;
  /** Useful setting to make the contents row/column aligned (flex-direction) */
  flexDirection?: "column" | "row";
}

export const Col: React.SFC<IProps> = ({
  size,
  height,
  verticalPadding,
  className,
  flexDirection,
  ...props
}) => (
  <Flex
    direction={flexDirection || "column"}
    className={cx(
      className,
      col({
        size,
        height
      }),
      css(buildVirticalPaddingFromString(verticalPadding))
    )}
    {...props}
  />
);

export default Col;
