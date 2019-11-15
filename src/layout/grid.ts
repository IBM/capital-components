// Based on grid breakpoints http://carbondesignsystem.com/style/grid/design
import cx from "classnames";
import {
  buildStringForMediaQueries,
  IBreakPointDescriptor,
  breakpoints,
  breakpointToColumnCount
} from "./mediaQueries";
import { getSpacingOrDefault } from "./spacing";
import { Omit } from "type-zoo/types";

export const createGridClass = (
  args: {
    isCondensed?: boolean;
  } = {}
) => {
  return cx("bx--grid", { "bx--grid--condensed": args.isCondensed });
};

export type SupportedSizes =
  | number
  | "auto"
  | Omit<IBreakPointDescriptor<number | "auto" | "all">, "base">;

export type SupportedHeights = number | Omit<IBreakPointDescriptor<number>, "base">;

export type SupportedOffsets = number | Omit<IBreakPointDescriptor<number>, "base">;

const breakpointKeys = Object.keys(breakpoints).filter(i => i !== "base");

/**
 * Creates classname for a grid column, specified from a given column span (1-12)
 */
export const createColClass = ({
  size,
  height,
  offset = {}
}: {
  size?: SupportedSizes;
  height?: SupportedHeights;
  offset?: SupportedOffsets;
}) => {
  const baseSizes = breakpointKeys.reduce(
    (acc, key) => ({
      ...acc,
      [key]: typeof size !== "object" ? (size === "auto" ? "-auto" : size) : undefined
    }),
    {}
  );
  const baseOffsets = breakpointKeys.reduce(
    (acc, key) => ({ ...acc, [key]: typeof offset === "number" ? size : undefined }),
    {}
  );
  const sizes = typeof size !== "object" ? baseSizes : size ? { ...baseSizes, ...size } : {};
  const offsets = typeof offset === "number" ? baseOffsets : { ...baseOffsets, ...offset };

  return cx(
    {
      "bx--col": size === undefined
    },
    ...Object.keys(sizes)
      .filter(breakpoint => sizes[breakpoint])
      .map(
        breakpoint =>
          `bx--col-${breakpoint}-${
            sizes[breakpoint] === "all" ? breakpointToColumnCount[breakpoint] : sizes[breakpoint]
          }`
      ),
    ...Object.keys(offsets)
      .filter(breakpoint => offsets[breakpoint])
      .map(breakpoint => `bx--offset-${breakpoint}-${offsets[breakpoint]}`)
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
