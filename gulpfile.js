/* required methods */
'use strict';

var gulp 			= require('gulp');
var browserSync 	= require('browser-sync');

//browser-reload
gulp.task('browser-reload', browserSync.reload);

gulp.task('watch', function(){
	browserSync({
		server: {
			baseDir: 'app/'
		}
	});
	
	gulp.watch('app/*.html', ['browser-reload']);
	gulp.watch('app/css/*.css', ['browser-reload']);
	gulp.watch('app/js/*.js', ['browser-reload']);

});


