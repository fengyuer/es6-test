# 构建工具目录
 (创建很多任务的js， 比如说文件的合并、 脚本的编译、 模板的自动更新等等，在这些命令当中有一个是需要处理命令行参数也就是说我们输入一段命令行工具 这个命令行工具它最后执行的东西要做解析)

> #### 1. 创建命令行参数

    cd tasks/util
    echo.>args.js

> #### 2. 创建构建脚本
对js做处理 (所有构建脚本一定放在tasks目录)

    cd tasks
    echo.>scripts.js

> #### 3. 安装依赖包

    npm install gulp gulp-if gulp-concat webpack webpack-stream  vinyl-named  gulp-livereload gulp-plumber gulp-rename gulp-uglify gulp-util yargs --save-dev

> #### 4. 创建gulp任务-js编译任务脚本
tasks/scripts.js

```js
    gulp.task(name,() => {
        return gulp.src([path]).pipe()
    })
```

> #### 5. 创建模板任务脚本
tasks/pages.js

> #### 6. 创建css任务脚本
tasks/css.js

> #### 7. 创建服务器脚本
tasks/server.js

> #### 8. 文件自动监听（所有的任务自动完成）
tasks/browser.js

> #### .9 创建clean任务(清空指定目录文件)
tasks/clean.js

> #### 10. 安装依赖包

    npm install gulp-live-server del --save-dev

> #### 11. 把所有的任务串起来
tasks/build.js

> #### 12. default
tasks/default.js

    // 安装gulp-sequence
    npm install gulp-sequence --save-dev

> #### 12. 全局安装gulp

    npm install --global gulp
