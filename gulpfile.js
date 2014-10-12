var gulp           = require('gulp');

var sass           = require('gulp-sass');
var watch          = require('gulp-watch');
var twig           = require('gulp-twig');
var mainBowerFiles = require('main-bower-files');
var connect        = require('gulp-connect');


var livereload = require('gulp-livereload');
var browserify = require('gulp-browserify');

var bourbon = require('node-bourbon');

gulp.task('sass', function () {
    gulp.src('dev/assets/stylesheets/**/*.scss')
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }))
        .pipe(gulp.dest('prod/assets/stylesheets/'))
        .pipe(livereload());
});

gulp.task('twig', function(){
    gulp.src('dev/views/*.twig')
    .pipe(twig())
    .pipe(gulp.dest('prod'))
    .pipe(livereload());
});

gulp.task('browserify-scripts', function() {
    // Single entry point to browserify
    gulp.src('dev/assets/javascripts/main.js')
        .pipe(browserify({
            transform: ['hbsify', 'debowerify'],
            extensions: ['.hbs']
        }))
        .pipe(gulp.dest('./prod/assets/javascripts/'))
});


gulp.task('images', function () {
  return gulp.src('dev/assets/images/**/*')
    .pipe(gulp.dest('prod/assets/images'))
    .pipe(livereload());
});

gulp.task('js', function () {
  return gulp.src(['dev/assets/javascripts/api.json', 'dev/assets/javascripts/settings.js'])
    .pipe(gulp.dest('prod/assets/javascripts'))
    .pipe(livereload());
});

gulp.task('fonts', function () {
  return gulp.src(['dev/assets/fonts/fonts/**/*'])
    .pipe(gulp.dest('prod/assets/fonts'));
});

gulp.task('watch', function() {
    gulp.watch(['dev/views/**'], ['twig']);
    gulp.watch('bower_components', ['vendors']);
    gulp.watch(['dev/assets/**'], ['sass', 'images', 'browserify-scripts', 'js', 'fonts']);
});

gulp.task('vendors', function() {
    return gulp.src('./bower_components/modernizr/modernizr.js' )
        .pipe(gulp.dest('prod/assets/vendors/'));
});



gulp.task('default', ['watch']);

