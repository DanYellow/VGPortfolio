var gulp = require('gulp');

var sass       = require('gulp-sass');
var livereload = require('gulp-livereload');
var watch      = require('gulp-watch');
var twig = require('gulp-twig');
var neat = require('node-neat').includePaths;




gulp.task('sass', function () {
    gulp.src('dev/assets/stylesheets/**/*.scss')
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest('prod/assets/stylesheets/'));
});

gulp.task('compile', function(){
    gulp.src('dev/views/*.twig')
    .pipe(twig())
    .pipe(gulp.dest('prod'))
});

gulp.task('images', function () {
  return gulp.src('dev/assets/images/**/*')
    .pipe(gulp.dest('prod/assets/images'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('dev/views/**', ['compile']);
    gulp.watch('dev/assets/**', ['sass', 'images']);
});



gulp.task('default', ['sass', 'compile']);

