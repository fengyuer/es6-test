import gulp from 'gulp'
import gulpif from 'gulp-if'
import gutil from 'gulp-util' // 函数集合
import args from './util/args'

gulp.task('browser', (cb) => {
    if(!args.watch) return cb();

    // gulp.watch第一个参数是指定监听的目录，第二个是要执行的任务
    gulp.watch('app/**/*.js',['script']);
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);

})