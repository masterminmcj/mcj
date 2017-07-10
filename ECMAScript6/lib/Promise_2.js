/**
 * Created by mastermin on 17-7-8.
 */
var  promise1=new Promise(function(resove,reject){
    resove(x);
});


/*promise
    .then(function() {
    })
    .then((value)=>console.log("true"))
     .catch((value)=>console.log('false'))
     */;


 var  promise2=new Promise(function(resove,reject){
 resove(x);
 });
 var  promise3=new Promise(function(resove,reject){
 resove("122");
 });
//Promise对象的all方法接收一个具有iteartor的一组promise对象
//原则是只要有一个为reject状态就会抛出第一个promise处理reject方法
//全部都是resove才是resove状态
 var promise=Promise.all([promise1,promise2,promise3]);


 promise.then((value)=>console.log("执行resove"))
 .catch((value)=>console.log("执行reject"));

 /*promise1.then(()=>console.log("Promise--1"))
 .catch(()=>console.log('ERR--1'));
 promise2.then(()=>console.log("Promise--2"))
 .catch(()=>console.log('ERR--2'));
 promise3.then(()=>console.log("Promise--3"))
 .catch(()=>console.log('ERR--3'));
 */
