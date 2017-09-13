/// 数组扩展

// Arrary.of() 用于将一组值，转换为数组
{
    let arr = Array.of(3,2,4,5,11)
    console.log('Arrary of---',arr)

    let empty = Array.of()
    console.log('empty---',empty)
}

// Array.from() 用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）
{
    let p = document.querySelectorAll('p');
    console.log(p)
    let pArr = Array.from(p)
    console.log(pArr)
    pArr.forEach(function(item){
        console.log(item.textContent) // .textContent原生js获取DOM节点文本内容的属性
    })
    // for(let item of pArr){
    //     console.log(item.textContent)
    // }

    // Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
    console.log(Array.from([1,3,5],function(item){
        return item*2
    }))
    // 等同于
    console.log(Array.from([1,3,5],item => item * 2))
    // 等同于
    console.log(Array.from([1,3,5]).map(item => item * 2))

    console.log(Array.from([1,,,2,,3,5,],n => n | 0))
}

// 填充数组 fill()
{
    console.log('fill-7',[1,'a',,].fill(7))
    // fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
    console.log('fill pos---',['a','b','c'].fill(7,1,2))
    console.log('fill pos---',['a','b','c','d'].fill(7,0,2))
}

// entries()，keys() 和 values()
{
    for(let index of ['1','c','3'].keys()){
        console.log('keys---',index)
    }
    for(let value of ['1','c','3'].values()){  // babel-polyfill
        console.log('values---',value)
    }
    for(let [index,value] of ['1','c','3'].entries()){
        console.log('entries---',index,value)
    }
}

// copyWithin() 
// 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
// 也就是说，使用这个方法，会修改当前数组。
{
    // 它接受三个参数。
    
    // target（必需）：从该位置开始替换数据。
    // start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
    // end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
    // 这三个参数都应该是数值，如果不是，会自动转为数值。
    console.log([1,2,3,4,5].copyWithin(2))
    console.log([1,2,3,4,5].copyWithin(0,2,3))
}

// find() findIndex()
// find用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
{
    let Arr = [1,2,3,4,56,7];
    console.log(Arr.find(function(item){
        return item > 3
    }))


    // find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
    console.log(Arr.find((value,index,arr)=>{
        return value > 3
    }))

    // findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
    console.log(Arr.findIndex(function(item){
        return item > 3 
    }))

    // 这两个方法都可以发现NaN，弥补了数组的IndexOf方法的不足
    console.log([NaN].indexOf(NaN))
    console.log([NaN].findIndex(y => Object.is(NaN,y)))
}

// includes()
{
    let Arr = [1,2,3,4,'a',NaN]
    console.log(Arr.includes(1))
    console.log(Arr.includes(NaN))
}