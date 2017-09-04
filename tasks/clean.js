import gulp from 'gulp'
import del from 'del' // 做删除动作的包
import args from './util/args'

gulp.task('clean', () => {
    // 清空2个目录
    return del(['server/public','server/views'])
})