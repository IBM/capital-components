import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { setDefaults } from "@storybook/addon-info";
import { addDecorator } from "@storybook/react";
import "carbon-components/css/carbon-components.css";
import "../styles/css/styles.css";
import "../styles/css/cap-grid.css";
import React from "react";
import { ThemeProvider } from "../src/support/theme";
import DefaultTheme from "../src/support/themes/other-products";
import excludedPropTypes from "./excludedPropTypes";

setOptions({
  name: "Capital Components",
  url: "https://github.ibm.com/watson-finance/wfss-components",
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
  sortStoriesByKind: true
});

setDefaults({
  source: false,
  inline: false,
  excludedPropTypes
});

addDecorator(story => <ThemeProvider theme={DefaultTheme}>{story()}</ThemeProvider>);

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.(js|ts)x?$/);
const req2 = require.context("../src", true, /\/stories.(js|ts)x?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
  req2.keys().forEach(filename => req2(filename));
}

configure(loadStories, module);
