/**
 * Created by mastermin on 17-7-8.
 */
//Object用于拷贝对象中可以枚举的属性和方法
var obj1={
    a:"A",

};
var obj2={
    b:"B"
};
var obj3={
    c:"C",

};

var obj=Object.assign(obj3,obj1,obj2);

//执行assign()后对象得到合并了
console.log(obj);//{ a: 'A', b: 'B', c: 'C' }

//但随即也改变了原对象,并把改变后的结果返回到第一个对象
console.log(obj1);//{ a: 'A'}
console.log(obj2);//{  b: 'B' }
console.log(obj3);//{ a: 'A', b: 'B', c: 'C' }


//继承

var obj_2_1={
    a:'A',
    b:'B',
    callback:function() {
       return this.a
    }
};

var obj_2_2={};
Object.assign(obj_2_2,obj_2_1);
//可以看出obj_2_2继承了A中的属性和方法
console.log(obj_2_2.a);//A
console.log(obj_2_2.callback());//A





obj_2_2.prototype.calls=function() {
    return this.b
};
console.log(obj_2_2.calls());//A
