var gulp = require('gulp');
var gutil = require('gulp-util');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var variables = require('postcss-css-variables');
var cssimport = require('postcss-import');
var nested = require('postcss-nested');
var extend = require('postcss-extend');
var stylelint = require('stylelint');
var reporter = require('postcss-reporter');

// Code style rules
var stylelintConfig = {
  "extends": "stylelint-config-suitcss",
  "rules": {
    "at-rule-empty-line-before": null,
    "block-opening-brace-newline-after": null,
    "comment-empty-line-before": null,
    "number-leading-zero": null,
    "string-quotes": "single",
    "selector-list-comma-newline-after": "always-multi-line",
    "selector-combinator-space-before": null
  }
}

// Check code style of stylesheets
gulp.task('css:lint', function() {
        return gulp.src('index.css')
        .pipe(postcss([
                stylelint(stylelintConfig),
                reporter({
                        clearMessages: true,
                }),
        ]));
});

// Compile css into /example
gulp.task('css', ['css:lint'], function() {
        var processors = [
                cssimport,
                variables,
                extend,
                nested,
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

