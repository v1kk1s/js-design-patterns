const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const glob = require('glob');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const flatten = require('gulp-flatten');
const spritesmith = require('gulp.spritesmith');

const connect = require('gulp-connect');

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	namespace: 'start',
	sourceBundle: 'all.js',
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		scss: './src/**/*.scss',
		dist: './dist',
		mainJs: './src/app/main.js',
		images: './src/public/img/**/*'
	}
};

gulp.task('connect', function () {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('html', function () {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('js', function () {
	return rebundle(
		browserify({
			entries: glob.sync(config.paths.js),
			debug: true
		}));
});

function rebundle(b) {
	return b
		.require(config.paths.mainJs, { expose: config.namespace })
		.on('error', function (err) {
			console.error(err);
			this.emit('end');
		})
		.transform(babelify)
		.bundle()
		.pipe(source(config.sourceBundle))
		.pipe(buffer())
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(config.paths.dist));
}

gulp.task('scss', function() {
	gulp.src('src/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: require('node-bourbon').includePaths
		})
			.on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist'))
});

gulp.task('images', function() {
	return gulp.src('src/public/img/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
		.pipe(gulp.dest('dist/public/img'));
});

gulp.task('sprite', function() {
	var spriteData =
		gulp.src('src/public/img/sprites/*.*')
			.pipe(spritesmith({
				imgName: 'sprite.png',
				cssName: 'sprite.scss'
			}));

	spriteData.img.pipe(gulp.dest('src/public/img/'));
	spriteData.css.pipe(gulp.dest('src/scss/'));
});

gulp.task('fonts', function() {
	return gulp.src('src/public/fonts/**/*')
		.pipe(flatten())
		.pipe(gulp.dest('dist/public/fonts'))
});

gulp.task('watch', function () {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js']);
	gulp.watch(config.paths.scss, ['scss']);
	gulp.watch(config.paths.images, ['images']);
});

gulp.task('default', ['html', 'js', 'scss', 'images', 'connect', 'watch', 'fonts']);