import { FlexDirectionProperty } from "csstype";
import { buildStringForMediaQueries, IBreakPointDescriptor } from "../layout/mediaQueries";

export const buildAlignment = (
  direction: FlexDirectionProperty,
  alignment: string | IBreakPointDescriptor<string>
) => {
  return buildStringForMediaQueries(alignment, align => buildAlignmentString(direction, align));
};

export const buildAlignmentString = (direction: FlexDirectionProperty, alignment: string) => {
  const values = alignment.split(" ");
  if (values.length === 1) {
    return `justify-content: ${values[0]}; align-items: ${values[0]}`;
  } else if (values.length === 2) {
    const alignmentProperty = direction === "row" ? "align-items" : "justify-content";
    const inverseAlignmentProperty =
      alignmentProperty === "align-items" ? "justify-content" : "align-items";
    if (values[0] === "horizontal") {
      return `${inverseAlignmentProperty}: ${values[1]}`;
    } else if (values[0] === "vertical") {
      return `${alignmentProperty}: ${values[1]}`;
    }
    return `${alignmentProperty}: ${values[0]}; ${inverseAlignmentProperty}: ${values[1]}`;
  }
  throw new Error("Invalid alignment provided.");
};
