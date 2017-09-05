// ***构建脚本***

// 整个项目都是基于gulp基础之上的
import gulp from 'gulp';

// 用作gulp语句中做gulp判断的
import gulpif from 'gulp-if'; 

// 在gulp中处理文件拼接的
import contact from 'gulp-concat'

// 打包
import webpack from 'webpack'

// gulp处理的是文件流,是基于stream的
import gulpwebpack from 'webpack-stream'

// 对文件重命名做标识
import named from 'vinyl-named'

// 热更新(文件修改以后浏览器自动刷新)
import livereload from 'gulp-livereload'

// 管道拼接(处理文件信息流)
import plumber from 'gulp-plumber'

// 对文件重命名
import rename from 'gulp-rename'

// 资源压缩(处理js压缩 css压缩)
import uglify from 'gulp-uglify'

// 命令行工具输出与色彩
import {log,colors} from 'gulp-util'

// 命令行参数进行解析的包
import args from './util/args'

// 创建gulp任务
// .task为gulp的api，是创建一个任务，任务的名称为scripts
gulp.task('scripts', ()=>{
    return gulp.src(['app/js/index.js']) // 打开'app/js/index.js'文件

        // 处理常规的错误逻辑
        .pipe(plumber({
            errorHandle:function(){

            }
        }))

        // 文件重新命名
        .pipe(named())

        // webpack对js重新编译
        .pipe(gulpwebpack({
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader'
                    }
                ]
            }
        }),null,(err) => { // 处理错误选项
            log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
                chunks: false
            }))
        })

        // 编译完之后的文件放置的位置
        .pipe(gulp.dest('server/public/js'))

        // 重命名
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        // 压缩
        .pipe(uglify({
            compress:{
                properties: false
            },
            output: {
                'quote_keys': true
            }
        }))
        // 重新保存目录
        .pipe(gulp.dest('server/public/js'))
        // 监听热更新
        .pipe(gulpif(args.watch,livereload()))
})

