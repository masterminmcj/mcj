/**
 * Created by mastermin on 17-6-28.
 */
var obj={
    0:'李娜',
  1:'张三',
  2:'李四',
  3:'王二',
  4:'张杰',
    length:5
};
console.log(obj);


var obj_trans=Array.from(obj);
console.log(obj_trans);

//copyWithin(target,[start],[end])
//target指定开始覆盖的位置,start指定开始替换的位置,end指定结束替换的位置
console.log([1,2,3,4,5,6].copyWithin(0,3));//456456