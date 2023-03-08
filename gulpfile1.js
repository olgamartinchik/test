// import gulp from "gulp";
// import { path } from "./gulp/config/path.js";

// global.app = {
// 	path: path,
// 	gulp: gulp,
// };

// import { copy } from "./gulp/tasks/copy.js";

// function watcher() {
// 	gulp.watch(path.watch.files, copy);
// }
// const dev = gulp.series(copy, watcher);

// gulp.task("default", dev);

// import dest from "gulp-dest";
// import sass from "gulp-sass";
// import csso from "gulp-csso";
// import include from "gulp-file-include";
// import htmlmin from "gulp-htmlmin";
// import { deleteAsync } from "del";
// import sync from "browser-sync";
// const syncModule = sync.create();

// const { src, dest } = require("gulp");
// const sass = require("gulp-sass");
// const csso = require("gulp-csso");
// const include = require("gulp-file-include");
// const htmlmin = require("gulp-htmlmin");
// const del = require("del");
// const sync = require("browser-sync").create();

// function html(cd) {
// 	gulp.src("src/**.html").pipe(
// 		gulp
// 			.include({
// 				prefix: "@@",
// 			})
// 			.pipe(gulp.dest("dist"))
// 	);
// 	cd();
// }

////
// "use strict";

// var gulp = require("gulp"),
// 	watch = require("gulp-watch"),
// 	prefixer = require("gulp-autoprefixer"),
// 	uglify = require("gulp-uglify"),
// 	sass = require("gulp-sass"),
// 	sourcemaps = require("gulp-sourcemaps"),
// 	rigger = require("gulp-rigger"),
// 	cssmin = require("gulp-minify-css"),
// 	imagemin = require("gulp-imagemin"),
// 	pngquant = require("imagemin-pngquant"),
// 	rimraf = require("rimraf"),
// 	browserSync = require("browser-sync"),
// 	reload = browserSync.reload;

/////
// import gulp from "gulp";
// import watch from "gulp-watch";
// import prefixer from "gulp-autoprefixer";
// import uglify from "gulp-uglify";
// import sass from "gulp-sass";
// import sourcemaps from "gulp-sourcemaps";
// import rigger from "gulp-rigger";
// import cssmin from "gulp-minify-css";
// import imagemin from "gulp-imagemin";
// import pngquant from "imagemin-pngquant";
// import rimraf from "rimraf";
// import browserSync from "browser-sync";
// const reload = browserSync.reload;

// const path = {
// 	build: {
// 		html: "build/",
// 		js: "build/js/",
// 		css: "build/css/",
// 		img: "build/img/",
// 		fonts: "build/fonts/",
// 	},
// 	src: {
// 		html: "src/*.html",
// 		js: "src/js/main.js",
// 		style: "src/style/index.scss",
// 		img: "src/img/**/*.*",
// 		fonts: "src/fonts/**/*.*",
// 	},
// 	watch: {
// 		html: "src/**/*.html",
// 		js: "src/js/**/*.js",
// 		style: "src/style/**/*.scss",
// 		img: "src/img/**/*.*",
// 		fonts: "src/fonts/**/*.*",
// 	},
// 	clean: "./build",
// };

// const config = {
// 	server: {
// 		baseDir: "./build",
// 	},
// 	tunnel: true,
// 	host: "localhost",
// 	port: 9000,
// 	logPrefix: "Frontend_Dev",
// };

// gulp.task("webserver", function () {
// 	browserSync(config);
// });

// gulp.task("clean", function (cb) {
// 	rimraf(path.clean, cb);
// });

// gulp.task("html:build", function () {
// 	gulp
// 		.src(path.src.html)
// 		.pipe(rigger())
// 		.pipe(gulp.dest(path.build.html))
// 		.pipe(reload({ stream: true }));
// });

// gulp.task("js:build", function () {
// 	gulp
// 		.src(path.src.js)
// 		.pipe(rigger())
// 		.pipe(sourcemaps.init())
// 		.pipe(uglify())
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest(path.build.js))
// 		.pipe(reload({ stream: true }));
// });

// gulp.task("style:build", function () {
// 	gulp
// 		.src(path.src.style)
// 		.pipe(sourcemaps.init())
// 		.pipe(
// 			sass({
// 				sourceMap: true,
// 				errLogToConsole: true,
// 			})
// 		)
// 		.pipe(prefixer())
// 		.pipe(cssmin())
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest(path.build.css))
// 		.pipe(reload({ stream: true }));
// });

// gulp.task("image:build", function () {
// 	gulp
// 		.src(path.src.img)
// 		.pipe(
// 			imagemin({
// 				progressive: true,
// 				svgoPlugins: [{ removeViewBox: false }],
// 				use: [pngquant()],
// 				interlaced: true,
// 			})
// 		)
// 		.pipe(gulp.dest(path.build.img))
// 		.pipe(reload({ stream: true }));
// });

// gulp.task("fonts:build", function () {
// 	gulp.src(path.src.fonts).pipe(gulp.dest(path.build.fonts));
// });

// gulp.task("build", [
// 	"html:build",
// 	"js:build",
// 	"style:build",
// 	"fonts:build",
// 	"image:build",
// ]);

// gulp.task("watch", function () {
// 	watch([path.watch.html], function (event, cb) {
// 		gulp.start("html:build");
// 	});
// 	watch([path.watch.style], function (event, cb) {
// 		gulp.start("style:build");
// 	});
// 	watch([path.watch.js], function (event, cb) {
// 		gulp.start("js:build");
// 	});
// 	watch([path.watch.img], function (event, cb) {
// 		gulp.start("image:build");
// 	});
// 	watch([path.watch.fonts], function (event, cb) {
// 		gulp.start("fonts:build");
// 	});
// });

// gulp.task("default", gulp.series("build", "webserver", "watch"));
