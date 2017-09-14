/// 函数扩展

// 函数参数的默认值
{
    function test(x,y='world'){
        console.log('默认值---',x,y)
    }
    test('hello')
    test('hello','Fiona')
    test('hello','')
}

// 作用域
{
    let x = 'test'
    function test2(x,y = x){
        console.log('作用域---',x,y)
    }
    function test3(c,y = x){
        console.log('作用域---',c,y)
    }

    test2('Fiona')
    test2()
    test3('Fiona')
    test3()
}

// rest 参数
{
    function test4(a,...arg){
        for(let v of arg){
            console.log('rest参数---',v)
        }
    }
    test4(1,2,3,4,'a')
}
{
    console.log(...[1,2,3])
    console.log('a',...[1,2,3])
}

// 箭头函数 =>
{
    let arrow = v => v * 2;  // 第一个v是参数, v*2是返回值 arrow是函数名
    console.log('arrow---',arrow(3))

    let arrow2 = () => 5  // 无参数
    console.log(arrow2())
}

// 尾调用 (提升性能) 指某个函数的最后一步是调用另一个函数
{
    function tail(x){
        console.log('tail---',x)
    }
    function fx(x){
        return tail(x)
    }
    fx(3)
}

// name属性 返回该函数的函数名
{
    let f = function(){}
    console.log(f.name)

    let bar = function baz(){}
    console.log(bar.name)
}

// 函数参数的尾逗号
// ES2017 允许函数的最后一个参数有尾逗号（trailing comma）。
{
    function show(
        params1,
        params2,
    ){}
    show(
        'foo',
        'bar',
    )
}

// catch 语句的参数 (提案中，目前不支持)
{
    // 传统的写法是catch语句必须带有参数，用来接收try代码块抛出的错误
    try{
        // ...
    }catch(err){
        // ...
    }

    // 新的写法允许省略catch后面的参数，而不报错。
    // try{
    //     // ...
    // }catch{
    //     // ...
    // }
}