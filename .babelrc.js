"use strict";

const NODE_ENV = process.env.NODE_ENV;

const moduleResolverOptions = {
  extensions: [".js", ".jsx", ".ts", ".tsx"],
  alias: {
    "^carbon-components-react/es/(.+?)$": "carbon-components-react/lib/\\1",
    "^capital-components$": "./src/index.ts",
    "^capital-components/lib/(.+?)$": "./src/\\1"
  }
};

const config = {
  presets: [
    [
      "@babel/env",
      {
        modules: "commonjs",
        targets: {
          browsers: ["last 1 versions", "Firefox ESR"]
        }
      }
    ],
    "@babel/react",
    "@babel/typescript"
  ],
  plugins: [
    "@babel/proposal-class-properties",
    ["emotion", { hoist: true, autoLabel: true }],
    "babel-plugin-add-react-displayname",
    "transform-carbon-imports",
    ["module-resolver", moduleResolverOptions]
  ]
};
if (NODE_ENV !== "test") {
  config.plugins.push("babel-plugin-jsx-remove-data-test-id");
} else {
  // This alias is only appropriate for testing environment, not building
  moduleResolverOptions.alias["test-utils"] = "./test-helpers/utils.tsx";
}

module.exports = config;
