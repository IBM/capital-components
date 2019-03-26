import { layers } from "../../layout/layers";
import { breakpoints } from "../../layout/mediaQueries";
import { layout, spacing } from "../../layout/spacing";
import { prebuiltFontStyles } from "../../primitives/text";

const colors = {
  brand01: "#0530ad",
  brand02: "#0f6fff",
  brand03: "#97c1ff",
  /** #ffffff */
  ui01: "#ffffff",
  /** #f3f3f3 */
  ui02: "#f3f3f3",
  /** #f3f3f3 */
  ui03: "#f3f3f3",
  /** #dcdcdc */
  ui04: "#dcdcdc",
  /** #0530AD */
  ui05: "#0530AD",
  /** #252525 */
  text01: "#252525",
  /** #767676 */
  text02: "#767676",
  /** #252525 */
  text03: "#252525",
  /** #ffffff */
  inverse01: "#ffffff",
  /** #ffffff */
  field01: "#ffffff",
  /** #e02730 */
  support01: "#e02730",
  /** #24a249 */
  support02: "#24a249",
  /** #fdd13a */
  support03: "#fdd13a",
  /** #5aaafa */
  support04: "#5aaafa",
  /** #000000 */
  nav01: "#000000",
  /** #252525 */
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
