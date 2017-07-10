/**
 * Created by mastermin on 17-7-4.
 */
//proxy即重定义原始语言的默认规则,对外界的行为进行过滤和改写
//笔记P27
var obj=new Proxy({},{
get:function(target,key,receiver){
console.log(`get the ${key}`);
return Reflect.get(target,key,receiver)
},
 set:function(target,key,value,receiver){
console.log(`set the ${value}`);
return Reflect.set(target,key,value,receiver)
}

});

obj.name="张三";//set the 张三
obj.name;//get the name

//本例中改写了点运算的语法规则,设置属性的点运算变成set the 所设置的属性
//获取属性的运算变成get the 键



//****************************************************
//标准版
//new Proxy(target,hander)
//target为要拦截的对象,hander为处理拦截的行为

var handler= {
    get: function (target, key, receiver) {
        console.log(`get the ${key}`);
        return Reflect.get(target, key, receiver)
    },
    set: function (target, key, value, receiver) {
        console.log(`set the ${value}`);
        return Reflect.set(target, key, value, receiver)
    }
};
var obj1={};

var proxy=new Proxy(obj1,handler);

proxy.sex="男";//set the 男

//同样起到拦截改写作用

console.log('----------------------------------------------------')
//******************************************************
var hander1={
    get:function(target,key) {  //拦截获取对象属性行为
      console.log(key)
    },

    has:function(target,key){
        console.log(key)//拦截key in proxy行为
    }
};

var obj2= {
    a:"A",
    b:"B",
    c:"C",
    d:"D"
};

var eg=new Proxy({},hander1);
console.log(["a","b","d"] in eg);//abcd
