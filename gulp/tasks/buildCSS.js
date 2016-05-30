var gulp 	   = require('gulp');

gulp.task( 'buildCSS', function() {
    gulp.src( 'src/main/css/*.css').pipe( gulp.dest('./'));
} );