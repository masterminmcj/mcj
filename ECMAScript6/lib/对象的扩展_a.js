/**
 * Created by mastermin on 17-7-1.
 */
//见笔记26页

var name="张三";
var person={name};
console.log(person);    //{ name: '张三' }



var persons={
    name:'张三',
    sayhello(){
        return console.log("hello "+this.name)
    }
};
persons.sayhello();        //hello 张三

//*******************************************
//将源对象中所有可枚举属性复制到目标对象上,包括方法

var obj1={
    a:1
};
var obj2={
    b:2
};

var obj3=Object.create(obj2);
obj3.c=3;

var obj4={
    d:4,
    count(){
        return this.d
    }
};

Object.assign(obj1,obj3,obj4);
console.log(obj1);//{ a: 1, c: 3, d: 4, count: [Function: count] }
console.log(obj1.count());//4


//****************************************

