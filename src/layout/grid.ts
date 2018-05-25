// Based on grid breakpoints http://carbondesignsystem.com/style/grid/design
import cx from "classnames";

// For now, always assume 12 columns but this could change with media queries.
export interface BreakPointDescriptor<A> {
  xs?: A;
  s?: A;
  m?: A;
  lg?: A;
  xl?: A;
}

export const createGridClass = (args?: {
  isContainer?: boolean;
  isFixedColumns?: boolean;
  isFluidRows?: boolean;
}) => {
  return cx("bx-grid", {
    "bx-container": args && args.isContainer,
    "bx-grid--fixed-columns": args && args.isFixedColumns,
    "bx-grid--fluid-rows": args && args.isFluidRows
  });
};

export type SupportedSizesAsFractions =
  | "1/2"
  | "1/3"
  | "1/4"
  | "1/6"
  | "2/3"
  | "3/4"
  | "5/6"
  | "all";

export type SupportedSizes =
  | number
  | SupportedSizesAsFractions
  | BreakPointDescriptor<number | SupportedSizesAsFractions>;

export type SupportedHeights = number | BreakPointDescriptor<number>;

const fractionToWhole = {
  "1/6": 2,
  "1/4": 3,
  "1/3": 4,
  "1/2": 6,
  "2/3": 8,
  "3/4": 9,
  "5/6": 10,
  all: 12
};

const determineSize = (size?: number | SupportedSizesAsFractions) => {
  if (typeof size === "number") {
    return size;
  }
  return fractionToWhole[size];
};

/**
 * Creates classname for a grid column, specified from a given column span (1-12)
 */
export const createColClass = ({
  size,
  height
}: {
  size?: SupportedSizes;
  height?: SupportedHeights;
}) => {
  const sizes =
    typeof size === "string" || typeof size === "number" ? { xs: size } : size || { xs: 1 };
  const heights = typeof height === "number" ? { xs: height } : height || {};

  return cx(
    ...Object.keys(sizes).map(
      breakpoint => `bx-grid__col--${breakpoint}--${determineSize(sizes[breakpoint])}`
    ),
    ...Object.keys(heights).map(
      breakpoint => `bx-grid__height--${breakpoint}--${heights[breakpoint]}`
    )
  );
};

// These paddings are specific to grid elements.
export type PaddingSingle = "top" | "right" | "bottom" | "left";

export type Padding = "none" | "all" | "horizontal" | "vertical" | PaddingSingle | PaddingSingle[];

// Based on css-gridish, build some standard spacing className
export const buildPaddingClasses = (padding?: Padding) => {
  if (!padding || padding === "none") {
    return undefined;
  }
  const paddings = Array.isArray(padding)
    ? padding.map(p => `bx-padding--${p}`)
    : padding === "all"
      ? ["bx-padding"]
      : [`bx-padding--${padding}`];
  return cx(paddings);
};
