var gulp 	   = require('gulp');

gulp.task( 'buildResources', function() {
    gulp.src( 'src/main/resources/**'  ).pipe( gulp.dest('./app/resources/'));
} );