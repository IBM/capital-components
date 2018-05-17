import React from "react";
import { cx, css } from "emotion";
import {
  createGridClass as grid,
  createColClass as col,
  SupportedSizes,
  buildPaddingClasses as buildGridPaddingClasses,
  Padding as GridPadding
} from "../../layout/grid";

const preventShrinkStyle = css`
  flex-shrink: 0;
`;

export default (
  {
    isContainer,
    isFixedColumns,
    isFluidRows,
    className,
    padding,
    preventShrink = true,
    ...props
  }: {
    isContainer?: boolean;
    isFixedColumns?: boolean;
    isFluidRows?: boolean;
    className?: string;
    padding?: GridPadding;
    preventShrink?: boolean;
  } & React.HTMLAttributes<HTMLDivElement> = {
    isContainer: false,
    isFixedColumns: false,
    isFluidRows: false
  }
) => (
  <div
    className={cx(
      className,
      grid({
        isContainer,
        isFixedColumns,
        isFluidRows
      }),
      buildGridPaddingClasses(padding),
      {
        [preventShrinkStyle]: preventShrink
      }
    )}
    {...props}
  />
);
