// Based on grid breakpoints http://carbondesignsystem.com/style/grid/design
import cx from "classnames";
import { buildStringForMediaQueries, IBreakPointDescriptor } from "./mediaQueries";
import { getSpacingOrDefault } from "./spacing";

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

const fractionToWhole = {
  "1/8": 2,
  /* Deprecated fraction.*/
  "1/6": 2,
  "1/4": 4,
  /* Deprecated fraction.*/
  "1/3": 6,
  "1/2": 8,
  /* Deprecated fraction.*/
  "2/3": 10,
  "3/4": 12,
  /* Deprecated fraction.*/
  "5/6": 14,
  "7/8": 14,
  all: 16
};

export type SupportedSizesAsFractions = keyof typeof fractionToWhole;

export type SupportedSizes =
  | number
  | SupportedSizesAsFractions
  | IBreakPointDescriptor<number | SupportedSizesAsFractions>;

export type SupportedHeights = number | IBreakPointDescriptor<number>;

const determineSize = (size: number | SupportedSizesAsFractions) => {
  if (typeof size === "number") {
    return size;
  }
  return fractionToWhole[size] || size;
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
      breakpoint =>
        `cap-grid__col--${breakpoint === "base" ? "xs" : breakpoint}--${determineSize(
          sizes[breakpoint]
        )}`
    ),
    ...Object.keys(heights).map(
      breakpoint =>
        `cap-grid__height--${breakpoint === "base" ? "xs" : breakpoint}--${heights[breakpoint]}`
    )
  );
};

export const buildVerticalSpacing = (
  desc?: string | IBreakPointDescriptor<string>,
  type: "padding" | "margin" = "padding"
) => {
  return buildStringForMediaQueries(desc, d => buildVerticalSpacingFromString(d, type));
};

export const buildVerticalSpacingFromString = (
  desc?: string,
  type: "padding" | "margin" = "padding"
) => {
  if (!desc) {
    return null;
  }

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
