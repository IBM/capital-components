import { IColors } from "@carbon/themes";
import { layers } from "../layout/layers";
import { breakpoints } from "../layout/mediaQueries";
import { spacing } from "../layout/spacing";
import { prebuiltFontStyles } from "../primitives/text";

export default function createTheme(colors: any) {
  // need to filter out some non-colors from the theme object
  const actualColors = Object.keys(colors).reduce(
    (acc, themeKey) => {
      if (typeof colors[themeKey] === "string") {
        return {
          ...acc,
          [themeKey]: colors[themeKey]
        };
      }
      return acc;
    },
    {} as IColors
  );
  const themeObject = {
    colors: actualColors,
    color: actualColors,
    spacing: {
      spacing
    },
    layers,
    fonts: {
      weights: {
        thin: 200,
        regular: 400,
        bold: 600
      },
      styles: prebuiltFontStyles
    },
    breakpoints
  };
  return themeObject;
}
