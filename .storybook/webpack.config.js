const path = require("path");

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
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
          excludes: ["stories\\.tsx$"]
        }
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.alias["@fss/components"] = path.resolve(__dirname, "../src/");
  return config;
};
