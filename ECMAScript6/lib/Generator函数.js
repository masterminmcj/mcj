/**
 * Created by mastermin on 17-7-6.
 */
//相当与一个状态机
//返回一个遍历对象
'use strict';
function* eg1(){

    yield "hello";
    yield "wrold";
    return "end"
}
var eg_int=eg1()//并不会像普通函数执行函数,而是返回一个遍历对象
//通过next()访问
console.log(eg_int.next().value);//{ value: 'hello', done: false }

for(var x of eg_int){
    console.log(x)//wrold,没有打印出hello原因是上一句已经执行了一次next()
}

//说明,Generator函数其实也是普通函数,只有通过yield定义的函数必须用next()访问
//故yield暂停执行函数
console.log("***************");
function* sayhello(name) {
    console.log("hello-"+name);
    // yield "stop";
    console.log("hello "+name)
}
var he=sayhello("Curry");
he.next();
//hello-Curry
//hello Curry

//当添加一条yield后
//hello-Curry,可以看出函数停止执行


//*************************************
console.log("***************");
//遍历一个数组
var arr=[1,[[2,3],4],5,[6,7]];
function arr_trav(arr){
    arr.forEach(function(x){
if(x.constructor===Array){
    return arr_trav(x)
}
else {
    return console.log(x)
}
    })
}
arr_trav(arr);//1,2,3,4,5,6,7



