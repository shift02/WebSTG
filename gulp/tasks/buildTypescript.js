var gulp     = require('gulp');
var typescript = require('gulp-typescript');
var concat = require('gulp-concat');
var uglify = require("gulp-uglify");
var sourcemaps = require('gulp-sourcemaps');
var debug = require('gulp-debug');

var typescriptProject = typescript.createProject({
	  target: "ES5", 
	  
	  removeComments: true, 
	  sortOutput: true,
	  noImplicitAny: false,
	  noExternalResolve: true,
	  preserveConstEnums: true,
	  module: 'commonjs'
	});

gulp.task('buildTypeScript', function(callback) {
	
	var ts = gulp.src(['src/library/**/*.ts','src/main/typescript/**/*.ts','!node_modules/**/*.ts'],
			{ base: 'src' })
	.pipe(debug({title: 'Compile-TS:'}))
	.pipe(gulp.dest('./public/src'))
	.pipe(sourcemaps.init())
	.pipe(typescript(typescriptProject))
    // jsプロパティを参照
    .js
	.pipe(concat("game.js"))
	.pipe(uglify())
	.pipe(sourcemaps.write({includeContent: false,sourceRoot: '/src'}))
	.pipe(gulp.dest('./'));
	
	return ts;
	
}
);