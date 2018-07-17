const path = require("path");

module.exports = (baseConfig, env, config) => {
  config.module.rules.push(
    {
      test: /(\.|\/)stories\.tsx?$/,
      use: [
        {
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, "tsconfig.json")
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
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, "tsconfig.json")
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
    },
    {
      test: /\.svg$/,
      loader: "svg-sprite-loader"
    }
  );
  // need to modify storybook to prevent built in svg loader
  const index = config.module.rules.findIndex(rule => {
    return (
      String(rule.test) ===
      String(/\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/)
    );
  });
  if (index >= 0) {
    config.module.rules[
      index
    ].test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/;
  }

  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.alias["@fss/components"] = path.resolve(__dirname, "../src/");
  config.resolve.modules.push(path.join(__dirname, "../src/"));
  config.module;
  return config;
};
