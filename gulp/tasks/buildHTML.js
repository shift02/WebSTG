var gulp 	   = require('gulp');

gulp.task( 'buildHTML', function() {
    gulp.src( 'src/main/html/*.html'  ).pipe( gulp.dest('./'));
} );