# 目录结构
(tree /f /a >filelist.md)

    |   .babelrc                // 设置babel编译工具的文件
	|                           // babel编译的时候自动会找这个文件,文件名不可更改（固定的）
	|   gulpfile.babel.js       // 使用.babel是因为接下来写的构建脚本都是使用es6的语法，
	|                           // 如果不加.babel会报错
	|   package.json            // 安装依赖包所需 npm init可自动创建
	|
	+---app                     // 放置前端代码
	|   +---css                 // css
	|   +---js                  // js
	|   |   |   index.js			// 入口文件
	|   |   |   
	|   |   \---class				// 类文件
	|   |           test.js
	|   |
	|   \---views               // 模板
	|           error.ejs       // 错误模板
	|           index.ejs       // 入口模板文件
	|
	+---server                  // 服务器目录
	|
	\---tasks                   // 构建工具目录
	    |
	    \---util
	           args.js
