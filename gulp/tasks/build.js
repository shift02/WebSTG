var gulp    	 = require('gulp');
var runSequence	 = require("run-sequence");

gulp.task('build', function(callback) {
	
	runSequence(['buildTypeScript','buildHTML','buildCSS','buildResources'],'buildClientFinish', callback);
	
});

gulp.task('buildClientFinish',function(callback) {
	
	console.log("complete success buildClient !");
	
	callback();
	
});