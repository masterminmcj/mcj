/**
 * Created by mastermin on 17-6-27.
 */
var arr1=["a","b","c",1];
var arrindex = 0;

function makeIterator(arr) {
    return {
        next:function(){
            return arrindex < arr.length ?
                {value: arr[arrindex++], done: false}:
                {value:undefined, done:true}

}
}

}
console.log(makeIterator(arr1).next().value);
console.log(makeIterator(arr1).next());
console.log(makeIterator(arr1).next());
console.log(makeIterator(arr1).next());
console.log(makeIterator(arr1).next());
console.log("**********************");
//数组本身具体iterator接口,故可直接调用
var arr2=[1,2,3];
var arr_Iterator=arr2[Symbol.iterator]();
console.log(arr_Iterator.next());
console.log(arr_Iterator.next());
console.log(arr_Iterator.next());
console.log(arr_Iterator.next());
/*
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
*/
var arr3=[1,2,3,4];
for(var vaule of arr3){
    console.log(vaule)
}//1,2,3,4
console.log("**********************");


//为类数组对象设置iterator接口
var obj={
    0:"curry",
    1:"male",
    2:"player",
    length:3,
    [Symbol.iterator]:Array.prototype[Symbol.iterator]
};
for(var value of obj){
    console.log(value)
}
var arr4='hello';
console.log([...arr4]);


var obj2={
    *[Symbol.iterator](){
        yield "curry";
        yield "sex";
        yield "player"
    }
};

for(var x of obj2){
    console.log(x)
}
console.log("&&&&&&&&&&&&&&&&");



var str="abcdefg";
for(var value of str){
    console.log(value)
}

var obj3={
    name:"关羽",
    nickname:"武圣",
    loard:"刘备"

};
for(x in obj3){
    console.log(x)
}


var str5="abc"
console.log(str5.startsWith("c"))

console.log("b".repeat(4));
