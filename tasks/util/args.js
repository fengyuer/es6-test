// 引入yargs包 处理命令行参数
import yargs from 'yargs'

const args = yargs

	// 区分开发环境与线上环境
	// 命令行gulp -production中-production就是它的选项部分,就是option
	// 就是区分命令行输入的有没有这个参数,进而区分是线上还是开发环境
    .option('production', {
    	boolean: true, // 这个选项为布尔类型
    	default: false, // 默认值false (即命令行没有输入这个参数的话，默认false 就是开发环境)
    	describe: 'min all script' // 描述(机器不识别这个)
    })

    // 控制要不要监听开发环境中修改的文件，比如说修改了js或者css要不要自动编译
    // 用watch参数控制
    .option('watch', {
    	boolean: true,
    	default: false,
    	describe: 'watch all files'
    })

    // 要不要详细的输出命令行执行的日志
    .option('verbose', {
    	boolean: true,
    	default: false,
    	describe: 'log'
    })

    // 关于内文映射
    .option('sourcemaps', {
    	describe: 'force the creation of sourcemaps'
    })

    // 服务器端口
    .option('port', {
    	string: true,
    	default: '8081',
    	describe: 'server port'
    })

    .argv // 表示对输出的命令行内容以字符串形式解析

export default args;