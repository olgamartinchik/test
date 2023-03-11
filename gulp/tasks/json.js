import { appendFile } from "fs";

export const json = () => {
	return app.gulp
		.src(app.path.src.json)
		.pipe(app.gulp.dest(app.path.build.json));
};
