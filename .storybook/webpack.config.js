const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (baseConfig, env, config) => {
  config.module.rules[0].use[0].loader = require.resolve("babel-loader");
  // Just use our babelrc instead.
  config.module.rules[0].use[0].options.babelrc = true;
  config.module.rules[0].use[0].options.presets = [];
  config.module.rules[0].use[0].options.plugins = [];

  config.module.rules.push(
    {
      test: /(\.|\/)stories\.tsx?$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            babelrc: true
          }
        },
        {
          loader: require.resolve("@storybook/addon-storysource/loader"),
          options: { parser: "typescript" }
        }
      ],
      enforce: "pre"
    },
    {
      test: /\.(ts|tsx)$/,
      exclude: /(\.|\/)stories\.tsx?$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            babelrc: true
          }
        },
        {
          loader: "react-docgen-typescript-loader",
          options: {
            tsconfigPath: path.resolve(__dirname, "tsconfig.json"),
            includes: ["components.*\\.tsx$"],
            excludes: ["stories\\.tsx$", "stories\\.ts"]
          }
        }
      ]
    }
  );

  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.plugins = config.resolve.plugins || [];
  config.resolve.plugins.push(
    new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, "../tsconfig.json") })
  );
  config.resolve.modules.push(path.join(__dirname, "../src/"));
  config.module;
  return config;
};
