/**
 * topic: Proxy and Reflect
 * date:2017/9/26
 * author:Fiona
 */
 
 {
     let obj = {
         time: '2017-9-26',
         name:'Fiona',
         _r: 123
     }

     let monitor = new Proxy(obj,{
        //  拦截对象属性的读取
         get(target,key){
             return target[key].replace('2017','2018')
         },
        //  拦截对象设置属性
         set(target,key,value){
             if(key === 'name'){
                 return target[key] = value
             }

         }
     })
     console.log('get---',monitor.time)
     monitor.time = '2019';
     monitor.name = 'Amanda'
    //  console.log('set---', monitor.time)
     console.log(monitor.name)

 }
