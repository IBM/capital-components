// Based on grid breakpoints http://carbondesignsystem.com/style/grid/design
import cx from "classnames";
import { getSpacingOrDefault } from "./spacing";
import { BreakPointDescriptor, buildStringForMediaQueries } from "./mediaQueries";

// For now, always assume 12 columns but this could change with media queries.

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

export const buildVirticalSpacing = (
  desc?: string | BreakPointDescriptor<string>,
  type: "padding" | "margin" = "padding"
) => {
  return buildStringForMediaQueries(desc, d => buildVirticalSpacingFromString(d, type));
};

export const buildVirticalSpacingFromString = (
  desc?: string,
  type: "padding" | "margin" = "padding"
) => {
  if (!desc) return null;

  const values = desc.trim().split(" ");
  if (values.length === 1) {
    return `${type}-top: ${getSpacingOrDefault(values[0])}; ${type}-bottom: ${getSpacingOrDefault(
      values[0]
    )};`;
  } else if (values.length === 2 && ["top", "bottom"].includes(values[0])) {
    return `${type}-${values[0]}: ${getSpacingOrDefault(values[1])};`;
  } else if (values.length === 2) {
    return `${type}-top: ${getSpacingOrDefault(values[0])}; ${type}-bottom: ${getSpacingOrDefault(
      values[1]
    )};`;
  }
  throw new Error(`Invalid padding string provided: ${desc};`);
};
