import colors from "../colors";
import { Theme } from "../theme";
import { spacing, layout } from "../../layout/spacing";

const theme: Theme = {
  color: {
    ...colors,
    brand01: "#6f28cc",
    brand02: "#924cfc",
    brand03: "#bc8aff"
  },
  spacing: {
    spacing,
    layout
  }
};

export default theme;
