/**
 * Created by mastermin on 17-7-4.
 */
var arr1=[1,2,3,4];
var arr2=[1,3,5,7];

var set1=new Set(arr1);
var set2=new Set(arr2);

//并集
//...把数组或set结构解析成字符串序列...[1,2,3]->1,2,3
var bing=new Set([...set1,...set2]);
bing=Array.from(bing);
//1,2,3,4,5,7
console.log(bing);

console.log("-----------------");
//交集
var jiao=new Set([...set1].filter(x=>set2.has(x)));
jiao=Array.from(jiao);
console.log(jiao);
//1,3

//差集(a中有的b中没有的或反过来)

var cha=new Set([...set1].filter(x=>!set2.has(x)));
cha=Array.from(cha);
//2,4
console.log(cha);

function add(num) {
    sum=0;
    for(var i=0;i<num;i++){
        sum+=i;
    }
    return sum
}




