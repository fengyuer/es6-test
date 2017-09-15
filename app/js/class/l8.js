/// 对象扩展

// 属性的简洁表示法
{
    let o = 3;
    let k = 5;
    let es5 = {
        o: o,
        k: k
    }
    let es6 = {
        o,
        k
    }
    console.log(es5,es6)

    let es5Method = {
        hello:function(){
            console.log('hello')
        }
    }
    let es6Method={
        hello(){
            console.log('hello')
        }
    }
    es5Method.hello();
    es6Method.hello()

}

// 属性名表达式
{
    let a = 'b';
    let name = 'Fiona';
    let es5Obj = {
        a: 'c',
        b: 'c'
    }

    let es6Obj = {
        [a]: 'c',
        [name]: 'Amanda'
    }

    console.log(es5Obj,es6Obj)

    let propKey = 'foo';
    let obj = {
      [propKey]: true,
      ['a' + 'bc']: 123
    };

    console.log(obj)
}

// 新增API
{
    // Object.is  同值相等 与'==='基本一致
    // 不同之处只有两个：一是+0不等于-0，二是NaN等于自身
    console.log('字符串 Object.is--',Object.is('f00','f00'))
    console.log('数组 Object.is--',Object.is([],[]),[]===[])
    console.log('0 -0 Object.is--',Object.is(0,-0),0 === -0)
    console.log('NaN Object.is--',Object.is(NaN,NaN),NaN === NaN)

    // Object.assign() 用于对象的合并,将源对象（source）的所有可枚举属性，复制到目标对象（target）
    console.log('拷贝 Object.assign--',Object.assign({a:'1'},{b:'2'}))

    console.log(Object(true))
    console.log(Object(1))
    console.log(Object('Fiona'))

    // Object.keys()，Object.values()，Object.entries()
    // Object.values() 目前支持不是很好
    let test = {k:'abc',o:123}
    for(let [k,v] of Object.entries(test)){
        console.log(k,v)
    }
}

// 扩展运算符 （babel目前还不支持）
{
    let [x,y,...z] = [1,2,3,4,5]
    console.log(z)
    // let {x,y,...z} = {a:1,b:2,c:3,d:4}
    // console.log(z)

    // let z = {a:3,b:4}
    // let n = {...z}
    // console.log(n)
    
}
{
    // let firstName = message?.body?.user?.firstName || 'default'
}