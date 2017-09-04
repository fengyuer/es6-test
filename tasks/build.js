import gulp from 'gulp'
// 处理包的顺序
import gulpSequence from 'gulp-sequence'

// 注册一个任务
// 第一步先clean,第二步copy css,紧接着编译模板,第三步执行脚本, serve一定要最后执行
gulp.task('build', gulpSequence('clean','css','pages','script',['browser','serve']))