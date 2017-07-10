/**
 * Created by mastermin on 17-7-5.
 */


/*我的实现方法,直接把对象绑定到数组上,因为数组内置有iterator故实现了接口的放置
function range(start,stop) {

    var results=[];
    if(stop<start||stop-start<=1){
        return "null"
    }
    else {
        for (var i = start + 1; i < stop; i++) {

           results.push(i)
        }

    }
return results
}*/

//为range()对象部署interator接口




function range(start,stop){

    return new rangeinterator(start,stop)
}


class rangeinterator {
    constructor(start, stop) {
        this.start = start;
        this.stop = stop
    }
//Symbol.iterator属性对应一个函数,执行后返回当前对象的遍历对象
    [Symbol.iterator]() {
        return this
    };



    next(){
        var value=this.start;
        if(value<this.stop){
            this.start++;
            return{
                value:value,
                done:false
            }

        }
        else {
            return{
                value:undefined,
                done:true
            }
        }

    }

}


for(var x of range(0,3)){
    console.log(x)
}
//1,2

//***************************************
console.log('------------------------');

//类数组安置iterator接口

var like_arr={
    0:'d',
    1:"a",
    2:'b',
    3:'c',
    length:4,
    [Symbol.iterator]:Array.prototype[Symbol.iterator]
};




for(var x of like_arr){
    console.log(x)//d,a,b,c
}



