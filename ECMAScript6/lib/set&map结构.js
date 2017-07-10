/**
 * Created by mastermin on 17-7-4.
 */
//最快数组去重
var arr=[1,2,4,5,6,3,2,5,2,8,12,3,12,42,2,3,45,5,"www","www"];

var arr2=Array.from(new Set(arr));
console.log(arr2);//[ 1, 2, 4, 5, 6, 3, 8, 12, 42, 45,'www' ]
//总结:适合数组中的类型为数组和字符串
//当为对象或数组时候不能使用
console.log("******************************");
//四大遍历方法


var set=new Set();

set.add(["c","a","b"]);


//1 keys()
for(let x of set.keys()){
    console.log(x)
}
//[ 'c', 'a', 'b' ]
console.log("----------");
for(let x of set.values()){
    console.log(x)
}
//[ 'c', 'a', 'b' ]
console.log("----------");
for(let x of set.entries()){
    console.log(x)
}
//[ [ 'c', 'a', 'b' ],[ 'c', 'a', 'b' ] ]
console.log("----------");

set.forEach(function(x){
    console.log(x)
});
//[ 'c', 'a', 'b' ]
console.log("----------");

var set1=new Set([1,2,3,4]);
console.log(set1);//set{1,2,3,4}

console.log(...set1);//1,2,3,4

console.log("------------");



//filter,map方法
console.log([...set1].filter(x=>x>2));
//[3,4]