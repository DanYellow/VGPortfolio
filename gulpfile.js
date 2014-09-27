var gulp           = require('gulp');

var sass           = require('gulp-sass');
var watch          = require('gulp-watch');
var twig           = require('gulp-twig');
var neat           = require('node-neat').includePaths;
var mainBowerFiles = require('main-bower-files');
var connect        = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'dev',
    livereload: true,
    port: 3000
  });
});

gulp.task('sass', function () {
    gulp.src('dev/assets/stylesheets/**/*.scss')
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest('prod/assets/stylesheets/'))
        .pipe(connect.reload());
});

gulp.task('twig', function(){
    gulp.src('dev/views/*.twig')
    .pipe(twig())
    .pipe(gulp.dest('prod'))
    .pipe(connect.reload());
});


gulp.task('images', function () {
  return gulp.src('dev/assets/images/**/*')
    .pipe(gulp.dest('prod/assets/images'))
    .pipe(connect.reload());
});

gulp.task('javascripts', function () {
  return gulp.src('dev/assets/javascripts/**/*')
    .pipe(gulp.dest('prod/assets/javascripts'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['dev/views/**'], ['twig']);
    gulp.watch('bower_components', ['vendors']);
    gulp.watch(['dev/assets/**'], ['sass', 'images', 'javascripts']);
});

gulp.task('vendors', function() {
    return gulp.src(mainBowerFiles(), { base: 'bower_components' })
        .pipe(gulp.dest('prod/assets/vendors/'));
});



gulp.task('default', ['connect', 'watch']);

