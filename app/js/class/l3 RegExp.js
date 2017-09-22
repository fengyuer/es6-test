/// 正则的扩展

{
    // es5 正则的写法
    // 第一种写法：第一个参数是字符串，第二个参数是修饰符
    let regex = new RegExp('xyz','i');
    // 第二种写法:只接受一个参数,也就是正则表达式方式
    let regex2 = new RegExp(/xyz/i);

    console.log(regex.test('xYz123'),regex2.test('xYz123'))

    // es6 正则的写法
    // es6中允许第一个参数是正则表达式的方式,允许第二个参数再填写修饰符
    let regex3 = new RegExp(/xyz/ig,'i') // es6中第二个修饰符会覆盖掉第一参数所指定ig的修饰符
    console.log(regex3.flags) // .flags es6新增的 用来获取正则对象的修饰符

}

// y修饰符 粘连”（sticky）修饰符
{
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y

    console.log('one',a1.exec(s),a2.exec(s))
    console.log('two',a1.exec(s),a2.exec(s))

    console.log(a1.sticky,a2.sticky) // .sticky 表示是否设置了y修饰符
}

// u（Unicode）修饰符
{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'))
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'))

    // a的unicode编码是61
    console.log(/\u{61}/.test('a'))
    console.log(/\u{61}/u.test('a'))

    // \u{}包起来是unicode编码
    console.log('\u{20BB7}')

    let s = '𠮷'
    console.log('u',/^.$/.test(s)) // 表明.不能匹配所有的字符 （条件：小于2个字节长度的字符）
    console.log('u-2',/^.$/u.test(s))  // 大于2个字节的字符要加u

    console.log('test',/𠮷{2}/.test('𠮷𠮷'))
    console.log('test-2',/𠮷{2}/u.test('𠮷𠮷'))

    // 换行符  回车符 行分隔符 段分隔符 这4个符号 点 也是无法识别的 这个要用s（提案中）修饰符
}