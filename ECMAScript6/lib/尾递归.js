/**
 * Created by mastermin on 17-7-1.
 */

"use strict";
//普通递归,复杂度为O(n)
function sum_n(n) {
    n=parseInt(n);
    if(n<0){
        return "n必须大于等于0";
    }

    else if (n === 0||n===1) {
        return 1
    }

    else {
        return n * sum_n(n - 1)
    }
}
console.log(sum_n(3));               //6

//***********************************************
    //尾递归优化,复杂度为O(1)

function sum_n1(n,results) {
    n=parseInt(n);                  //保证输入的数为整数
    if(n<0){
        return "n必须大于等于0"
    }

    else if(n===0||n===1){
        return results
    }
    else {
        return sum_n1(n-1,n*results) //尾递归
    }
}

//函数柯里化
function tr_sum_n1(n) {
    return sum_n1(n,1)               //转向处理阶乘函数
}
console.log(tr_sum_n1(5));            //计算5的阶乘  120

//***********************************************
//2:更优的处理
//使用函数默认参数
function sum_n2(n,results=1) {
    n=parseInt(n);                  //保证输入的数为整数
    if(n<0){
        return "n必须大于等于0"
    }

    else if(n===0||n===1){
        return results
    }
    else {
        return sum_n1(n-1,n*results) //尾递归
    }
}
console.log(sum_n2(5));               //120


