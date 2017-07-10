/**
 * Created by mastermin on 17-7-4.
 */
"use strict";

//与正常数组不同的是ArrayBuffer定义初始化时自动填0
//正溢出与负溢出
var buffer=new ArrayBuffer(4);//定义二进制数组

var buf1=new Uint8Array(buffer);//TypedView视图为8位无符号整型
buf1[0]=-2;
buf1[1]=1;
buf1[2]=257;

for(var x of buf1){
    console.log(x)//254,1,1,0
}
console.log(buf1.byteLength);//返回字节数长度
//一种视图只能存在一种数据类型


//******************************************************
//混合视图
var buffer1=new ArrayBuffer(20);
var uint8=new Uint8Array(buffer1,0,3);
var uint16=new Uint16Array(buffer1,4,1);
var flot32=new Float32Array(buffer1,8,3);
//将一个长度为20的二进制数组对象分成三段,
//字节0-3为8位无符号数
//字节4-7为16位无符号数
//字节8-19为32为浮点数

//*********************************************************
//DataView
console.log('*************************************');
var buffer2=new ArrayBuffer(20);

var buf3=new Uint8Array(buffer2,10);
for(var i=0;i<buf3.length;i++){
    buf3[i]=i+1;
}

console.log(buf3);//1-10


var D_view=new DataView(buffer2);
D_view.setInt8(0,100,true);
console.log(D_view.getInt8(0,true));




