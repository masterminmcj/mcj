/**
 * Created by mastermin on 17-7-6.
 */
// 'use strict';
function* add(x) {
    var y=x+(yield (x+1));
    var z=yield (x/2);
    return (x+y+z);
}

/*
 var add=add(5);

 console.log(add.next().value);//执行x+1得6
 console.log(add.next().value);//执行x/2的2.5
 console.log(add.next());//{ value: NaN, done: true }
 // 产生NaN原因是yield语句默认返回值为undefined
 */

console.log("--------------");
//若使yield有值,可为next()添加参数
var add1=add(4);
console.log(add1.next().value);//5
console.log(add1.next(4).value);//2
console.log(add1.next(10).value);//14  4+4+10+4

//为对象布置遍历接口
function* crete_trav(obj) {
    var key=Object.keys(this);

    for(var x of key){
        yield [x,this[x]]
    }
}

var obs={a:"A",b:"B",c:"C"};

obs[Symbol.iterator]=crete_trav;
for(var [key,value] of obs){
    console.log(key);//a,b,c
    console.log(value);//ABC
}


