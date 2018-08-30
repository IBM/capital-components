import colors from "../colors";
import { Theme } from "../theme";
import { spacing, layout } from "../../layout/spacing";

const theme: Theme = {
  color: {
    ...colors,
    brand01: "#006162",
    brand02: "#009e9b",
    brand03: "#20d5d2"
  },
  spacing: {
    spacing,
    layout
  }
};

export default theme;
