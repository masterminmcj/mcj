let tools = {

    drawSingleLine: function (ctx, startPos, endPos) {
        let x1 = startPos.x;
        let y1 = startPos.y;
        let x2 = endPos.x;
        let y2 = endPos.y;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle='#000';
        ctx.stroke();

    },
    drawLine: function (ctx, posArr) {
        ctx.beginPath();
        for (var i = 0; i < posArr.length-1; i++) {
            let x1 = posArr[i].x;
            let y1 = posArr[i].y;
            let x2 = posArr[i+1].x;
            let y2 = posArr[i+1].y;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle='#00f';
            ctx.stroke();
        }
    },
    
    drawPic:function (ctx,src,options,w,h) {
        var Img=new Image();
        Img.src=src;
        Img.onload=function () {
            ctx.drawImage(Img,options.x,options.y,w,h)
        }
    },
    getMaxPos:function (arr) {
for(var i=0;i<arr.length;i++){

}

    }

};


