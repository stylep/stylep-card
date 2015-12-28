var gulp = require('gulp');
var gutil = require('gulp-util');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var cssimport = require('postcss-import');
var mixins = require('postcss-mixins');
var nested = require('postcss-nested');
var stylelint = require('stylelint');
var reporter = require('postcss-reporter');

// Check code style of stylesheets
gulp.task('css:lint', function() {
        return gulp.src('index.css')
        .pipe(postcss([
                stylelint,
                reporter({
                        clearMessages: true,
                }),
        ]));
});

// Compile css into /example
gulp.task('css', ['css:lint'], function() {
        var processors = [
                cssimport,
                nested,
                mixins,
                autoprefixer(['last 2 versions'])
        ];
        return gulp.src('example/index.css')
                .pipe(postcss(processors).on('error', gutil.log))
                .pipe(gulp.dest('example/build'));
});

// Watch css and compile upon file changed
gulp.task('watch', function() {
        gulp.watch('example/index.css', ['css']);
});

