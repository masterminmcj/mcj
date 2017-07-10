/**
 * Created by mastermin on 17-7-7.
 */
var a=function* (){};
a.prototype.sayhello=function() {
  return "hello"
};

var b=a();

//与普通的构造不同,上述的赋值语句实例化一个对象,而这个对象继承了a中的方法
//相当于普通函数的new
console.log(b instanceof a);//true
console.log(b.sayhello());//hello



//**************************
//普通函数可访问原型函数的this


//而Generato函数this总是指向遍历器对象


function* c1() {
    this.d1=123
}

var e1=c1();
console.log(e1.d1);//undefined


console.log('------------------------');


//状态机

/*
(function(){
    var open=true;

    function door(){
        if(open){
            console.log("the door is open");
            open=!open
        }
        else {
            console.log("the door is close");
            open=!open
        }
    }
    door()
    door()
    door()
    door()
    door()
    door()
    door()
    door()
})();
*/


//状态机Generator的实现
var door=function* (){
    while(1){
        yield ("the door is open");

        yield  ("the door is close");

    }
};
var door=door();
console.log(door.next().value);
console.log(door.next().value);
console.log(door.next().value);
console.log(door.next().value);

