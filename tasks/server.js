import gulp from 'gulp'
import gulpif from 'gulp-if'
import liveserver from 'gulp-live-server' // 启动服务器的包(启动一个脚本 作为服务器)
import args from './util/args'

gulp.task('serve', (cb) => {
    if(!args.watch) return cb();

    // 监听状态下创建一个服务器
    // --harmony 在当前命令行下执行后面的脚本('server/bin/www'是一个脚本)
    var server = liveserver.new(['--harmony','server/bin/www'])

    // 启动服务器
    server.start();

    // 热更新(js,ejs,css等改变的时候，浏览器自动刷新)
    // gulp.watch 文件的监听
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'], function(file){
        // 把改动告诉服务器
        server.notify.apply(server,[file])
    })

    // 重启服务的文件(服务器中的路由或者写的接口发生变化时 需要重启服务器)
    // 'server/routes/**/*.js' 服务器的脚本文件 做接口用的
    // 'server/app.js'服务器启动入口
    gulp.watch(['server/routes/**/*.js','server/app.js'], function(){
        server.start.bind(server)()

    })

})