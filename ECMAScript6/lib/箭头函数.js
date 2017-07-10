/**
 * Created by mastermin on 17-7-1.
 */
'use strict';

// /1 一个参数
var f=v=>v;
console.log(f(5));//5
//上述代码等效于:
/*function f(v) {
    return v
}*/



//2 没有参数
var f1=()=>10;
console.log(f1());//10

//3 等效于:
/*
function f1() {
    return 10
}
*/


//4 多个参数,加()
var f2=(a,b)=>a+b;
console.log(f2(100,100));//200

//等效于:
/*
 function f2(a,b) {
 return a+b
 }
 */


//5 多个参数,多条语句,加{}
var f3=(a,b)=>{a--;b--;return a+b};
console.log(f3(4,5));


//6 返回的值是对象,加({ })
var f4=(a,b)=>({
   name:a,
    num:b
});
console.log(f4("张三",100));

//7 匿名函数
console.log([1,4,3,2].sort((a,b)=>a-b));//1,2,3,4

//等效为:
/*arr=[1,4,3,2].sort(function(a,b){
    return a-b;
});*/


