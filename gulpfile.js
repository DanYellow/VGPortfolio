var gulp           = require('gulp');

var sass           = require('gulp-sass');
var watch          = require('gulp-watch');
var twig           = require('gulp-twig');
var neat           = require('node-neat').includePaths;
var mainBowerFiles = require('main-bower-files');
var connect        = require('gulp-connect');


var livereload = require('gulp-livereload');

var browserify = require('gulp-browserify');

/*gulp.task('connect', function() {
  connect.server({
    root: 'dev',
    livereload: true,
    port: 3000
  });
});*/

/*gulp.task('connect', function ()
{
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('./dev', {default: "app.html"}))
        .use(connect.static('.tmp'))
        // paths to bower_components should be relative to the current file
        // e.g. in app/index.html you should use ../bower_components
        .use('/bower_components', connect.static('bower_components'))
        .use(connect.directory('dev'));

    require('http').createServer(app)
                   .listen(3001)
                   .on('listening', function () {
                        console.log('Started connect web server on http://localhost:3001');
                   });
});*/

gulp.task('sass', function () {
    gulp.src('dev/assets/stylesheets/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('prod/assets/stylesheets/'))
        .pipe(livereload());
});

gulp.task('twig', function(){
    gulp.src('dev/views/*.twig')
    .pipe(twig())
    .pipe(gulp.dest('prod'))
    .pipe(livereload());
});

gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('dev/assets/javascripts/main.js')
        .pipe(browserify())
        .pipe(gulp.dest('./prod/assets/javascripts/'))
});


gulp.task('images', function () {
  return gulp.src('dev/assets/images/**/*')
    .pipe(gulp.dest('prod/assets/images'))
    .pipe(livereload());
});


gulp.task('watch', function() {
    gulp.watch(['dev/views/**'], ['twig']);
    gulp.watch('bower_components', ['vendors']);
    gulp.watch(['dev/assets/**'], ['sass', 'images', 'scripts']);
});

gulp.task('vendors', function() {
    return gulp.src(mainBowerFiles(), { base: 'bower_components' })
        .pipe(gulp.dest('prod/assets/vendors/'));
});



gulp.task('default', ['watch']);

