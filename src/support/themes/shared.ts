import { spacing, layout } from "../../layout/spacing";
import { layers } from "../../layout/layers";
import { prebuiltFontStyles } from "../../primitives/text";
import { breakpoints } from "../../layout/mediaQueries";

const colors = {
  brand01: "#0530ad",
  brand02: "#0f6fff",
  brand03: "#97c1ff",
  ui01: "#ffffff",
  ui02: "#f3f3f3",
  ui03: "#f3f3f3",
  ui04: "#dcdcdc",
  ui05: "#0530AD",
  text01: "#252525",
  text02: "#767676",
  text03: "#252525",
  inverse01: "#ffffff",
  field01: "#ffffff",
  support01: "#e02730",
  support02: "#24a249",
  support03: "#fdd13a",
  support04: "#5aaafa",
  nav01: "#000000",
  nav02: "#252525"
};

const theme = {
  colors,
  color: colors,
  spacing: {
    spacing,
    layout
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

export default theme;
