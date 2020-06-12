const gulp = require("gulp");
const del = require("del");
const merge = require("merge2");
const ts = require("gulp-typescript");
const replace = require("gulp-replace");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const gulpIf = require("gulp-if");
const fail = require("gulp-fail");
const path = require("path");
const map = require("through2-map");
const docGen = require("react-docgen-typescript");
const rename = require("gulp-rename");
const Vinyl = require("vinyl");
const ReactDocGenMarkdownRenderer = require("react-docgen-markdown-renderer");
const createTemplate = require("./docTemplate");
const fs = require("fs");

const pkg = require("./package.json");
const tsProject = ts.createProject("tsconfig.json", {
  module: "commonjs",
  declaration: true
});

sass.compiler = require("node-sass");

const parser = docGen.withCustomConfig("./tsconfig.json");

const clean = () => del(pkg.files);

const sources = [
  "src/**/*.ts",
  "src/**/*.tsx",
  "./types.d.ts",
  "!src/**/stories.tsx",
  "!src/**/*.test.tsx",
  "!src/**/test.tsx",
  "!src/**/*.test.ts",
  "!src/**/test.ts",
  "!src/internal/**/*",
  "!src/components/**/*__hooks.tsx"
];

const compileScripts = () => {
  const tsResult = gulp
    .src(sources) // or tsProject.src()
    .pipe(tsProject());
  const babelResult = gulp
    .src(sources)
    .pipe(babel())
    .pipe(gulp.dest("lib"));

  return merge([
    tsResult.dts
      // Remove external references to emotion types because they use relative paths
      // and those break when using as a module.
      .pipe(
        replace(/\/\/\/ <reference path=".*\/node_modules\/emotion\/types\/index.d.ts" \/>/, "")
      )
      .pipe(
        // If any reference paths exist to local modules, the reslts will be problematic, just fail
        gulpIf(file => {
          return file.contents.toString().match(/\/\/\/ <reference path=".*\/node_modules\//);
        }, fail(() => "Failed generating types. Found exported references paths."))
      )
      .pipe(gulp.dest("lib")),
    babelResult
  ]);
};

const compileStylesSass = () =>
  gulp
    .src(["./scss/styles.scss", "./scss/carbon-components.scss"])
    .pipe(
      sass({
        includePaths: ["node_modules"]
      })
    )
    .pipe(gulp.dest("styles/css"));

const compileStylesCSS = () => gulp.src("css-gridish/css/**/*.css").pipe(gulp.dest("styles/css"));

const copyStylesSass = () => gulp.src("./scss/**/*").pipe(gulp.dest("styles/scss"));

const copyIcons = () => gulp.src("./src/fss-icons/**/*").pipe(gulp.dest("lib/fss-icons"));

gulp.task(
  "build",
  gulp.series([
    clean,
    compileScripts,
    compileStylesSass,
    compileStylesCSS,
    copyStylesSass,
    copyIcons
  ])
);

gulp.task("watch:scripts", () => gulp.watch(sources, compileScripts));

const generateDocs = () =>
  gulp
    .src([
      "src/components/**/*.tsx",
      "!src/components/**/stories.tsx",
      "!src/components/**/stories.ts",
      "!src/components/**/test.tsx",
      "!src/components/**/test.ts",
      "!src/components/**/index.tsx",
      "!src/components/**/index.ts"
    ])
    .pipe(
      map(
        {
          objectMode: true
        },
        file => {
          const readmePath = path.join(path.dirname(file.path), "README.md");
          const hasExistingReadme = fs.existsSync(readmePath);

          let templateContent = "";
          if (hasExistingReadme) {
            templateContent = fs.readFileSync(readmePath).toString();
          }

          const template = createTemplate(templateContent);

          const renderer = new ReactDocGenMarkdownRenderer({
            template
          });
          const docs = parser.parse(file.path);
          const results = docs.map(c => renderer.render(file.path, c, [])).join("\n");

          return new Vinyl({
            base: file.base,
            path: file.path,
            contents: new Buffer(results)
          });
        }
      )
    )
    .pipe(
      rename({
        basename: "README",
        extname: ".md"
      })
    )
    .pipe(gulp.dest("src/components"));

gulp.task("generateDocs", generateDocs);
