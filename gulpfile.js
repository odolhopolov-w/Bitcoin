var gulp = require("gulp");
var less  = require("gulp-less");
gulp.task("less",function(done) {
  gulp.src("less/**/*.less")
    .pipe(less())
    .pipe(gulp.dest("css"))
    done();
});
// var gulp = require("gulp");
// var less = require("gulp-less");
// var plumber = require("gulp-plumber");
// var postcss = require("gulp-postcss");
// var autoprefixer = require("autoprefixer");
// var server = require("brows-sync").create();
//
// gulp.task ("less", function() {
//   gulp.src("less/style.less")
//   .pipe(plumber())
//   .pipe(less())
//   .pipe(postcss([
//     autoprefixer()
//   ]))
//   .pipe(gulp.dest("css"))
//   .pipe(server.stream());
// });
//
// gulp.task("serve",["style"], function {
//   server.init({
//   server: ".";
//   notify: false;
//   open: true;
//   cors: true;
//   ui: false;
// });
//   gulp.watch("less/**/*.less", ["style"]);
//   gulp.watch("*.html").on("change", server.reload);
// });
