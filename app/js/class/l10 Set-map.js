/**
 * topic:set-map
 * date:2017/9/21
 * author:Fiona
 */

// set
{
    // ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
    // Set 本身是一个构造函数，用来生成 Set 数据结构。
    {
        let list = new Set()
        // add方法向 Set 结构加入成员
        list.add(5)
        list.add(7)

        console.log('size---',list.size)
    }
    {
        // Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化
        let arr = [1,2,3,4]
        let list = new Set(arr)

        console.log('size--',list.size)
    }
    {
        // Set 结构不会添加重复的值
        let list = new Set()
        list.add(1)
        list.add(2)
        list.add(1)
        console.log('list---',list)
        console.log([...list])
        console.log(...list)

        // 去除数组重复成员的方法
        // [...new Set(array)]
        // 向Set加入值的时候，不会发生类型转换,所以2和"2"是两个不同的值 
        let arr = [1,2,'2',3,6,,2,4,3,5,3,'3']
        let list2 = new Set(arr)
        console.log('list2---',list2)
        console.log('unique---',[...list2])
    }
    {
        // Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。
        // 下面先介绍四个操作方法。
        let arr = ['add','delete','clear','has']
        let list = new Set(arr)

        // add(value)：添加某个值，返回Set结构本身。
        list.add(1)
        console.log('add---',list)

        // has(value)：返回一个布尔值，表示该值是否为Set的成员。
        console.log('has---',list.has('has'))

        // delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
        console.log('delete---',list.delete(1),list)

        // clear()：清除所有成员，没有返回值。
        list.clear()
        // console.log('clear---',list.clear());
        console.log('list',list)
    }
    {
        // Array.from方法可以将 Set 结构转为数组。
        let items = new Set([1,2,3,2,4,5])
        let arr = Array.from(items)
        console.log('Array.from----',arr)
    }
    // set 读取 --- 遍历操作
    // Set 结构的实例有四个遍历方法，可以用于遍历成员
        // keys()：返回键名的遍历器
        // values()：返回键值的遍历器
        // entries()：返回键值对的遍历器
        // forEach()：使用回调函数遍历每个成员
    // Set的遍历顺序就是插入顺序。
    // 这个特性有时非常有用，比如使用Set保存一个回调函数列表，调用时就能保证按照添加顺序调用
    {
        // keys()，values()，entries()
        // keys方法、values方法、entries方法返回的都是遍历器对象。
        // 由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。
        let arr = ['add','delete','clear','has']
        let list = new Set(arr)

        for(let k of list.keys()){
            console.log('keys---',k)
        }
        for(let v of list.values()){
            console.log('values---',v)
        }
        for(let value of list){
            console.log('value---',value)
        }
        for(let entries of list.entries()){
            console.log('entries---',entries)
        }
        for(let [k,v] of list.entries()){
            console.log('entries---',k,v)
        }

        // forEach
        list.forEach(function(item) {
            console.log(item)
            
        }, this);
    }
}

// weakSet
{
    // WeakSet 结构与 Set 类似，也是不重复的值的集合。
    // 但是，它与 Set 有两个区别。
    // 首先，WeakSet 的成员只能是对象，而不能是其他类型的值。

    // 其次，WeakSet 中的对象都是弱引用，
    // 即垃圾回收机制不考虑 WeakSet 对该对象的引用，
    // 也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
    let weakList = new WeakSet();
    let arg = {}
    weakList.add(arg)
    weakList.add([1])
    console.log('weakSet',weakList)

    // 无法遍历
}

// map
{
    let map = new Map();
    let arr = ['123']
    let obj = {p: 'hello word'}

    // map使用set方法 添加键
    map.set(arr,456)
    map.set(obj,'789')
    // map使用get方法 读取这个键
    console.log('map---',map.get(arr),map)
}
{
    // map定义的第二种方法
    let map = new Map([['a','123'],['b','456']])

    console.log('map arg---',map)
    console.log(map.get('b'))
    console.log('size---',map.size)
    // 删除
    console.log('delete---',map.delete('a'),map)
    // 清空
    console.log('clear---',map.clear(),map)

    let m = new Map([['a',123],['b',456],['a','789']])
    console.log('m---',m)
}

// WeakMap
{
    // 它的key一定是对象
    let weakmap = new WeakMap();

    let o = {}
    weakmap.set(o,123)
    console.log('weakmap---',weakmap)

}