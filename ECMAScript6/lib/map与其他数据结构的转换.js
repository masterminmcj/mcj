/**
 * Created by mastermin on 17-7-5.
 */
//转数组(...运算)过程略

//map转对象(前提是键都是字符串)
var map=new Map();
map.set("a","A").set("b","B").set('c','C');
// Map { 'a' => 'A', 'b' => 'B', 'c' => 'C' }



function change_(map) {
    var obj={};
    for ([k,v] of map) {
        obj[k]=v
    }
    return obj
}
//{a:"A",b:'B',c:'C'}

//map转json在转对象的基础下json化即可
var map_json=JSON.stringify(change_(map));
//{"a":"A","b":"B","c":"C"}


 var test_arr=[2,3,4,5,6];

 // for(x of test_arr){
 //  c_json(x)
 // }
 //
 function c_json(arr){
     var obj={};
   for(var x of arr){
       obj[x]=x;
   }

 return obj
 }





