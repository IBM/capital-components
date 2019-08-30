const fs = require("fs");
const util = require("util");
const path = require("path");

const { breakpoints } = require("@carbon/layout");
const unlinkP = util.promisify(fs.unlink);
const writeFileP = util.promisify(fs.writeFile);

(async function() {
  const newGridishConfig = {
    prefix: "cap",
    breakpoints: Object.keys(breakpoints).reduce((acc, key) => {
      const desc = breakpoints[key];
      acc[key] = {
        breakpoint: desc.width.replace("rem", ""),
        columns: desc.columns,
        gutter: 0,
        margin: desc.margin
      };
      return acc;
    }, {}),
    extraArtboards: {},
    rem: 16,
    rowHeight: 0.5,
    rows: 60
  };
  await writeFileP(
    path.resolve(__dirname, "../css-gridish.json"),
    JSON.stringify(newGridishConfig)
  );
  process.exit(1);
})();
