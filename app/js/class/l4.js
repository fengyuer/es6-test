/// 字符串扩展
// 字符unicode表示方法
{
    // 小于0xFFFF的编码
    console.log('a','\u0061')

    // 大于0xFFFF的编码
    console.log('s','\u20BB7')
    console.log('s-2','\u{20BB7}')

}
{
    let s= '𠮷'
    console.log('length',s.length)
    console.log('0',s.charAt(0)) // 取第一个位置的字符
    console.log('1',s.charAt(1)) // 取第二个位置的字符
    console.log('at0',s.charCodeAt(0)) // 取unicode第一个字符的码值
    console.log('at1',s.charCodeAt(1)) // 取unicode第二个字符的码值

    // es6处理方法
    let s1 ="𠮷a"
    console.log('length',s1.length)
    console.log('code0',s1.codePointAt(0))
    console.log('code0',s1.codePointAt(0).toString(16))
    console.log('code1',s1.codePointAt(1))
    console.log('code1',s1.codePointAt(2))
    console.log('code1',s1.codePointAt(2).toString(16))

}
{
    // es5取码值
    console.log(String.fromCharCode('0x20bb7'))
    // es6取码值
    console.log(String.fromCodePoint('0x20bb7'))
}
{
    // 字符串遍历器
    let str = '\u{20bb7}abc'
    // es5
    for(let i = 0; i < str.length; i++){
        console.log('es5',str[i])
    }
    // es6
    for(let code  of str){
        console.log('es6',code)
    }
}
// includes() startsWith() endsWith()
{
    let str = "string"
    console.log('includes',str.includes('c'))

    // 是否以str开始的
    console.log('start',str.startsWith('str'))

     // 是否以ing结束的
    console.log('end',str.endsWith('ing'))
}
// repeat() 返回一个新字符串，表示将原字符串重复n次。
{
    let str = 'abc';
    console.log(str.repeat(2));
}
// 模板字符串
{
    let name= 'Fiona'
    let info = 'hello'
    let m = `${info}!i am ${name}`
    console.log(m)
}
// padStart() padEnd()
{
    // ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。
    // padStart()用于头部补全，padEnd()用于尾部补全。
    console.log('1'.padStart(2,'0'))

    let m = new Date().getMonth() + 1;
    console.log('Month',String(m).padStart(2,'0'))

    console.log('2'.padEnd(3,'.0'))
}
// 标签模板
{
    let user = {
        name:'Fiona ',
        info: 'hello'
    }
    console.log(abc`i am ${user.name},${user.info}`)
    function abc(s,v1,v2){
        console.log(s,v1,v2)
        return s+v1+v2
    }
    // “标签模板”的一个重要应用，就是过滤HTML字符串，防止用户输入恶意内容。
    // 处理多语言转换
}

// String.raw()
{
    console.log(String.raw`Hi\n${1+2}`)
    console.log(`Hi\n${1+2}`)
}

