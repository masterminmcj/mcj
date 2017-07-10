/**
 * Created by mastermin on 17-7-5.
 */
//Map结构用于解决传统对象的键只能为字符串的问题,更加强大的HASH结构
    'use strict';
var map=new Map();

var obj={
    a:"A",
    b:"B",
    c:'C'
};


map.set('a',"张三");
map.set('b',"李四");
map.set('c',"王二");
map.set('d',"老李");

map.clear();//清除所有值

for(var x in obj){
    map.set(x,obj[x]);
}
//Map { 'a' => 'A', 'b' => 'B', 'c' => 'C' }
console.log(map);

//****************************
console.log("-----------------");

var map1=new Map([["a","A"],['b',"B"],["c","C"]]);
//Map { 'a' => 'A', 'b' => 'B', 'c' => 'C' }
console.log(map1);
console.log("--------");
//相当于:
map1.clear();
var arr=[
    ["a","A"],
    ['b',"B"],
    ["c","C"],
    ['d',"D"]
];
arr.forEach(
    ([key,value])=>map1.set(key,value)

);
//Map { 'a' => 'A', 'b' => 'B', 'c' => 'C' }
console.log(map1);

//...运算对map结构的影响
console.log(...map1);
//[ 'a', 'A' ] [ 'b', 'B' ] [ 'c', 'C' ]

//通过点运算可以把map结构变成数组,这一点与set一致

console.log("--------");
//filter,map方法
//返回值比B大的成员,运用箭头函数
console.log([...map1].filter(([k,v])=>v>'B'));
//[ [ 'c', 'C' ], [ 'd', 'D' ] ]





