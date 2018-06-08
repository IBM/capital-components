// Based on grid breakpoints http://carbondesignsystem.com/style/grid/design
import cx from "classnames";
import { spacing } from "./spacing";

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
  return cx("cap-grid", {
    "cap-container": args && args.isContainer,
    "cap-grid--fixed-columns": args && args.isFixedColumns,
    "cap-grid--fluid-rows": args && args.isFluidRows
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

const determineSize = (size: number | SupportedSizesAsFractions) => {
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
    "cap-padding--horizontal",
    ...Object.keys(sizes).map(
      breakpoint => `cap-grid__col--${breakpoint}--${determineSize(sizes[breakpoint])}`
    ),
    ...Object.keys(heights).map(
      breakpoint => `cap-grid__height--${breakpoint}--${heights[breakpoint]}`
    )
  );
};

export const buildVirticalPaddingFromString = (padding?: string) => {
  if (!padding) return null;

  const values = padding.trim().split(" ");
  if (values.length === 1) {
    return `padding-top: ${spacing[values[0]]}; padding-bottom: ${spacing[values[0]]};`;
  } else if (values.length === 2 && ["top", "bottom"].includes(values[0])) {
    return `padding-${values[0]}: ${spacing[values[1]]};`;
  } else if (values.length === 2) {
    return `padding-top: ${spacing[values[0]]}; padding-bottom: ${spacing[values[1]]};`;
  }
  throw new Error(`Invalid padding string provided: ${padding};`);
};
