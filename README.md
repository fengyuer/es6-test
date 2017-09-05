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
[详见tasks](./tasks)

# 全局安装gulp

    npm install --global gulp

# 项目构建测试

> ### 安装babel依赖包

    npm install babel-loader babel-core babel-preset-env --save-dev

> ### 编辑gulpfile.babel.js
gulpfile.babel.js

#### 安装require-dir

    npm install require-dir --save-dev

> ### 配置.babelrc

    // 安装依赖包
    npm install babel-preset-es2015 --save-dev
