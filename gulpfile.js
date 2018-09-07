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

const pkg = require("./package.json");
const tsProject = ts.createProject("tsconfig.json", {
  module: "commonjs",
  declaration: true
});

const clean = () => del(pkg.files);

const sources = [
  "src/**/*.ts",
  "src/**/*.tsx",
  "!src/**/stories.tsx",
  "!src/**/*.test.ts",
  "!src/**/test.ts",
  "!src/internal/**/*"
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
      .pipe(gulp.dest("types")),
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

gulp.task(
  "build",
  gulp.series([clean, compileScripts, compileStylesSass, compileStylesCSS, copyStylesSass])
);
