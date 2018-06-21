import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { setDefaults } from "@storybook/addon-info";
import { addDecorator } from "@storybook/react";
import "carbon-components/css/carbon-components.css";
import "../dist/css/styles.css";
import "../dist/css/cap-grid.css";

setOptions({
  name: "Capital Components",
  url: "https://github.ibm.com/watson-finance/wfss-components",
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
  sortStoriesByKind: true
});

setDefaults({
  source: false,
  inline: false
});

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.(js|ts)x?$/);
const req2 = require.context("../src/components/", true, /\/stories.(js|ts)x?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
  req2.keys().forEach(filename => req2(filename));
}

configure(loadStories, module);
