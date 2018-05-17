import React from "react";
import {
  createGridClass as grid,
  createColClass as col,
  SupportedSizes,
  Padding as GridPadding,
  buildPaddingClasses as buildGridPaddingClasses
} from "../../layout/grid";
import { buildSpacingFromString } from "../../layout/spacing";
import { cx } from "emotion";
import styled from "react-emotion";

const Flex = styled<{ direction?: "column" | "row"; padding?: string }, "div">("div")`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  ${({ padding }) => buildSpacingFromString(padding)};
`;

export const Col = ({
  size,
  height,
  padding = "horizontal",
  className,
  flexDirection,
  ...props
}: {
  size?: SupportedSizes;
  height?: number | number[]; // Row height of column entry, is multiplied by our row height preset (according to css-gridish.json - 0.5rem == 8px)
  padding?: GridPadding;
  flexDirection?: "column" | "row";
} & React.HTMLAttributes<HTMLDivElement>) => (
  <Flex
    direction={flexDirection || "column"}
    className={cx(
      className,
      col({
        size,
        height
      }),
      buildGridPaddingClasses(padding)
    )}
    {...props}
  />
);
