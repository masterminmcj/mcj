/**
 * Created by mastermin on 17-7-7.
 */

/*function time_delay(t){
    return new Promise(function(resove,reject){
        setTimeout(function(){
            resove("处于完成状态")
        },t);
        setTimeout(function(){
            reject("处于失败状态")
        },t+1000)
    })
}

time_delay(2000).then(function(value){
    console.log(value)
},function(value){
    console.log(value)
});*/
//Promise包装ajax

function getjson(url) {
    var promise=new Promise(function(resove,reject){
        var xhr=new XMLHttpRequest();


        xhr.onreadystatechange=function(){
            if(xhr.readyState===4&&xhr.status===200){
                resove(this.responseText)
            }
          else {
                reject("ajxa传输失败")
            }
        };

        xhr.open("POST",url,true);
        xhr.send()
    });
    return promise
}
getjson("./file/ajax.json").then(function(value){
    console.log(value)

},function(value){
    console.log(value)
});








