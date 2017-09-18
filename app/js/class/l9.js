/// symbol用法

// 声明
{
    let a1 = Symbol()
    let a2 = Symbol();

    console.log(a1===a2)

    let a3 = Symbol.for('a3')
    let a4 = Symbol.for('a3')

    console.log(a3 === a4)
}

// 作用
{
    let a1 = Symbol.for('abc')
    let obj = {
        [a1]: '123',
        'abc': 345,
        'c': 456
    }

    console.log(obj)

    // for...of取不到 Symbol值
    for(let [k,v] of Object.entries(obj)){
        console.log('for of---',k,v)
    }

    console.log(Object.getOwnPropertySymbols(obj)) // 只取到Symbol值
    Object.getOwnPropertySymbols(obj).forEach((item) => {
        console.log(obj[item])
    })

    // Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名
    console.log('Reflect.ownKeys---',Reflect.ownKeys(obj))
    Reflect.ownKeys(obj).forEach((item) => {
        console.log('ownKeys---',obj[item])
    })

    console.log(typeof a1)

}