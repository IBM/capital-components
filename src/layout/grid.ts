// Based on grid breakpoints http://carbondesignsystem.com/style/grid/design
import cx from "classnames";
import {
  buildStringForMediaQueries,
  IBreakPointDescriptor,
  smallestBreakpoint,
  breakpoints
} from "./mediaQueries";
import { getSpacingOrDefault } from "./spacing";
import { breakpoints as carbonBreakpoints } from "@carbon/elements";

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

// const fractionToWhole = (breakpoint: keyof IBreakPointDescriptor<number>) => {
//   const columnCount = carbonBreakpoints[breakpoint].columns;
//   return {
//     "1/8": Math.floor(columnCount / 8),
//     /* Deprecated fraction.*/
//     "1/6": Math.floor(columnCount / 6),
//     "1/4": Math.floor(columnCount / 4),
//     /* Deprecated fraction.*/
//     "1/3": Math.floor(columnCount / 3),
//     "1/2": Math.floor(columnCount / 2),
//     /* Deprecated fraction.*/
//     "2/3": Math.floor((columnCount / 3) * 2),
//     "3/4": Math.floor((columnCount / 4) * 3),
//     /* Deprecated fraction.*/
//     "5/6": Math.floor((columnCount / 6) * 5),
//     "7/8": Math.floor((columnCount / 8) * 7),
//     all: columnCount
//   };
// };

// const fractionsPerBreakpoint = Object.keys(carbonBreakpoints).reduce(
//   (acc, item: any) => {
//     acc[item] = fractionToWhole(item);
//     return acc;
//   },
//   {} as Partial<IBreakPointDescriptor<ReturnType<typeof fractionToWhole>>>
// );

export type SupportedSizes = number | IBreakPointDescriptor<number>;

export type SupportedHeights = number | IBreakPointDescriptor<number>;

// const determineSize = (size: number | SupportedSizesAsFractions, breakpoint: any) => {
//   if (typeof size === "number") {
//     return size;
//   }
//   return (fractionsPerBreakpoint[breakpoint] && fractionsPerBreakpoint[breakpoint][size]) || size;
// };

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
    typeof size === "string" || typeof size === "number"
      ? { [smallestBreakpoint]: size }
      : size || { [smallestBreakpoint]: 1 };
  const heights = typeof height === "number" ? { [smallestBreakpoint]: height } : height || {};

  return cx(
    "cap-padding--horizontal",
    ...Object.keys(sizes).map(
      breakpoint =>
        `cap-grid__col--${breakpoint === "base" ? smallestBreakpoint : breakpoint}--${determineSize(
          sizes[breakpoint],
          breakpoint === "base" ? smallestBreakpoint : breakpoint
        )}`
    ),
    ...Object.keys(heights).map(
      breakpoint =>
        `cap-grid__height--${breakpoint === "base" ? smallestBreakpoint : breakpoint}--${
          heights[breakpoint]
        }`
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
