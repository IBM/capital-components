const path = require("path");

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
        }
      ]
    }
  );

  // need extensions because babel-resolve doesn't handle this for us.
  // little bit of duplicated config. Make sure this matches in .babelrc.js
  config.resolve.extensions.push(".js", "jsx", ".ts", ".tsx");
  return config;
};
