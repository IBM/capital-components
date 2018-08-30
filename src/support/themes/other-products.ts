import colors from "../colors";
import { Theme } from "../theme";
import { spacing, layout } from "../../layout/spacing";

const theme: Theme = {
  color: {
    ...colors,
    brand01: "#0530ad",
    brand02: "#0f6fff",
    brand03: "#97c1ff"
  },
  spacing: {
    spacing,
    layout
  }
};

export default theme;
