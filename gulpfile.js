"use strict";

let gulp = require("gulp");
let jshint = require("gulp-jshint");

// const { series } = require('gulp');

// // The `clean` function is not exported so it can be considered a private task.
// // It can still be used within the `series()` composition.
// function clean(cb) {
//   // body omitted
//   cb();
// }

// // The `build` function is exported so it is public and can be run with the `gulp` command.
// // It can also be used within the `series()` composition.
// function build(cb) {
//   // body omitted
//   cb();
// }

// exports.build = build;
// exports.default = series(clean, build);

gulp.task("jshint", () => {
  return gulp.src("./*.js").pipe(jshint()).pipe(jshint.reporter("default"));
});

gulp.task("test", (done) => {
  require("./test.js");
  done();
});

gulp.task("serve", (done) => {
  require("./server.js");
  done();
});

gulp.task("default", gulp.series("jshint", "test", "serve"));
