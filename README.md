# es6-test
es6 test of immoc

# 创建server
  ##**运行express脚手架工具**
  1. **进入server目录**

    cd server

  2. **在当前目录(server)下运行express脚手架工具创建ejs模板引擎**
    
    express -e .
    
    npm install

# 构建工具目录
> **1. 创建命令行参数**

    cd tasks/util
    echo.>args.js

> **2. 创建构建脚本**
    对js做处理 (所有构建脚本一定放在tasks目录)

    cd tasks
    echo.>scripts.js

> **3. 安装依赖包**

    npm install gulp gulp-if gulp-concat webpack webpack-stream  vinyl-named  gulp-livereload gulp-plumber gulp-rename gulp-uglify gulp-util yargs --save-dev