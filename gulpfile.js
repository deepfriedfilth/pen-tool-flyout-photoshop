var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {
	/* Sass it up, pack it up */
	gulp.src('client/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./client/'));

});

gulp.task('default', ['styles'], function() {
	gulp.watch('client/**/*.scss',['styles']);
});