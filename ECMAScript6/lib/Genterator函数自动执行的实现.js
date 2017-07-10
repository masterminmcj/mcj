/**
 * Created by mastermin on 17-7-8.
 */
var g=function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};
/*var g_s=g();
console.log(g_s.next().value);//1
console.log(g_s.next().value);//2*/
//一次只能得到一条yield语句的执行,相当于异步执行

//同步实现的方法
function c_sync(fn){
    var values=[];
    var g_=fn();
    function next(object_g){
var this_o=object_g.next();

    if(this_o.done) return
    else {
        values.push(this_o.value);
        next(object_g)
}

    }
    next(g_);
    return values;
}
console.log(c_sync(g));//12345
//实现了同步触发Generator


//ESCA7中方法
/*var g1=async function(){
    await 1;
    await 2;
    await 3;
    await 4;
};
console.log(g1());*/



