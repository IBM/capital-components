const gulp = require("gulp");
const del = require("del");
const merge = require("merge2");
const ts = require("gulp-typescript");
const replace = require("gulp-replace");
const sass = require("gulp-sass");

const pkg = require("./package.json");
const tsProject = ts.createProject("tsconfig.json", {
  module: "commonjs",
  declaration: true
});

const clean = () => del(pkg.files);

const compileScripts = () => {
  const tsResult = gulp
    .src(["src/**/*.ts", "src/**/*.tsx", "!src/**/stories.tsx", "!src/**/*.test.ts"]) // or tsProject.src()
    .pipe(tsProject());

  return merge([
    // We need to override references in types to use nodejs
    // module resolution instead of relative node_modules for types
    tsResult.dts
      .pipe(replace(/import\("(\.\.\/)+node_modules\//g, 'import("'))
      .pipe(gulp.dest("types")),
    tsResult.js.pipe(gulp.dest("lib"))
  ]);
};

const compileStylesSass = () =>
  gulp
    .src("./scss/styles.scss")
    .pipe(sass())
    .pipe(gulp.dest("styles/css"));

const compileStylesCSS = () => gulp.src("css-gridish/css/**/*.css").pipe(gulp.dest("styles/css"));

const copyStylesSass = () => gulp.src("./scss/**/*").pipe(gulp.dest("styles/scss"));

gulp.task(
  "build",
  gulp.series([clean, compileScripts, compileStylesSass, compileStylesCSS, copyStylesSass])
);
