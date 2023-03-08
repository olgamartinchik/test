import pkg from "gulp";
const { series, src, dest, parallel, watch } = pkg;
import browserSync from "browser-sync";
import changed from "gulp-changed";
import imagemin from "gulp-imagemin";
import clean from "gulp-clean";
const browsersync = browserSync.create();
function clear() {
	return src("./dist/*", {
		read: false,
	}).pipe(clean());
}
function img() {
	return src("./src/img/*").pipe(imagemin()).pipe(dest("./dist/img"));
}
function html() {
	return src("./src/*.html").pipe(dest("./dist/")).pipe(browsersync.stream());
}
function css() {
	const source = "./src/css/style.css";
	return src(source)
		.pipe(changed(source))
		.pipe(cssnano())
		.pipe(deast("./dist/css"))
		.pipe(browsersync.stream());
}
function image() {
	return src("./src/img/*").pipe(imagemin()).pipe(dest("./dist/img"));
}
function watchFile() {
	watch("./src/css/*", css);
	watch("./src/*.html", html);
	watch("./src/img/*", img);
}
function getBrowserSync() {
	browsersync.init({
		series: {
			baseDir: "./dist",
		},
		port: 4000,
	});
}

exports.watch = parallel(watchFile, getBrowserSync);
exports.default = series(clear, parallel(html, css, image));
