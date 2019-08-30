import { IColors } from "@carbon/themes";
import { layers } from "../layout/layers";
import { breakpoints } from "../layout/mediaQueries";
import { spacing } from "../layout/spacing";
import { prebuiltFontStyles } from "../primitives/text";

export default function createTheme(colors: IColors) {
  const themeObject = {
    colors,
    color: colors,
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
