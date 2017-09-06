/// 结构赋值
// 数组结构赋值
{
    let a,b,rest;
    [a,b]= [1,2]
    console.log(a,b)
}
{
    let a,b,rest;
    [a,b,...rest] = [1,2,3,4,5,6]
    console.log(a,b,rest)
}
{
    let a,b;
    ({a,b} = {a:1,b:2})
    console.log(a,b)
}
{
    let a,b,c,rest;
    [a,b,c=3]= [1,2]
    console.log(a,b,c)
}
{
    let a=1;
    let b=2;
    [a,b]= [b,a]
    console.log(a,b)
}
{
    let a = 0; let b = 0;
    if(a){
        console.log("asa"+ a)
    }
    if(b){
        console.log("asa"+ b)
    }
    console.log(a,b)
}
{
    function f(){
        return [1,2,3,4,5,6]
    }
    let a,b,c
    [a,,,b] = f()
    console.log(a,b)
}
{
    function f(){
        return [1,2,3,4,5,6]
    }
    let a,b,c
    [a,,...b] = f()
    console.log(a,b)
}
// 对象结构赋值
{
    let o = {p:42,q:true}
    let {p,q} = o;
    console.log(o)
}
{
    let {a=10,b=5}={a:3}
    console.log(a,b)
}
{
    let metaData = {
        title: 'abc',
        test:[{
            title:'Fiona',
            desc:'me'
        }]
    }
    let {title:esTit,test:[{title:cnTit}]}= metaData;
    console.log(esTit,cnTit)
}