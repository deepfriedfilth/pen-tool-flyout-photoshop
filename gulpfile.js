var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function(done) {
	/* Sass it up, pack it up */
	gulp.src('client/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./client/'));

	done();
});

gulp.task('watch', function(done) {
	gulp.watch('client/**/*.scss',gulp.parallel('styles'));

	done();
});

gulp.task('default', gulp.series('styles', 'watch'));