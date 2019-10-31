// Based on grid breakpoints http://carbondesignsystem.com/style/grid/design
import cx from "classnames";
import {
  buildStringForMediaQueries,
  IBreakPointDescriptor,
  smallestBreakpoint
} from "./mediaQueries";
import { getSpacingOrDefault } from "./spacing";
import { Omit } from "type-zoo/types";

export const createGridClass = (args?: {
  isCondensed?: boolean;
  isContainer?: boolean;
  isFixedColumns?: boolean;
  isFluidRows?: boolean;
}) => {
  return cx("bx--grid", { "bx--grid--condensed": args.isCondensed });
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

export type SupportedOffsets = number | Omit<IBreakPointDescriptor<number>, "base">;

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
  height,
  offset
}: {
  size?: SupportedSizes;
  height?: SupportedHeights;
  offset?: SupportedOffsets;
}) => {
  const sizes =
    typeof size === "string" || typeof size === "number"
      ? { [smallestBreakpoint]: size }
      : size || {};
  const offsets =
    typeof size === "string" || typeof size === "number"
      ? { [smallestBreakpoint]: size }
      : size || {};

  return cx(
    {
      "bx--col": size === undefined
    },
    ...Object.keys(sizes).map(
      breakpoint =>
        `bx--col-${breakpoint === "base" ? smallestBreakpoint : breakpoint}-${
          sizes[breakpoint === "base" ? smallestBreakpoint : breakpoint]
        }`
    ),
    ...Object.keys(offsets).map(breakpoint => `bx--offset-${breakpoint}-${offsets[breakpoint]}`)
    // ...Object.keys(heights).map(
    //   breakpoint =>
    //     `cap-grid__height--${breakpoint === "base" ? smallestBreakpoint : breakpoint}--${
    //       heights[breakpoint]
    //     }`
    // )
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
