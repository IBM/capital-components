"use strict";

const BABEL_ENV = process.env.BABEL_ENV;

module.exports = {
  presets: [
    [
      "@babel/env",
      {
        modules: BABEL_ENV === "es" ? false : "commonjs",
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
    ["lodash", { id: ["recompose"] }],
    "transform-carbon-imports",
    [
      "transform-rename-import",
      {
        replacements: [
          {
            original: "^carbon-components-react\\/es\\/(.+?)$",
            replacement: "carbon-components-react/lib/$1"
          }
        ]
      }
    ]
  ]
};
