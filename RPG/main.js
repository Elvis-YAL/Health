var mapArray, ctx, currentImgMainX, currentImgMainY;
var imgMountain, imgMain, imgEnemy;
$(document).ready(function() {
    mapArray = [0,0,1,1,0,0,3,3,2];
    ctx = $("#myCanvas")[0].getContext("2d");//2d繪圖
    imgMain = new Image();
    imgMain.src = "RPG/images/spriteSheet.png";
    currentImgMainX=0;//初始座標
    currentImgMainY=0;//初始座標
    imgMain.onload=function()//載入後執行後面這對段程式
    {                       //座標，寬高      從這裡開始放                     縮放
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200);
    };
    imgMountain = new Image();
    imgMountain.src = "RPG/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "RPG/images/Enemy.png";
    imgMountain.onload=function(){
        imgEnemy.onload=function(){
            for(var x in mapArray)
            {
                if(mapArray[x]==1)//遇到1擺上山
                {
                ctx.drawImage(imgMountain,223,63,32,32,x%3*200,Math.floor(x/3)*200,200,200);}else if(mapArray[x]==3)//遇到3擺上敵人
                    {
                        ctx.drawImage(imgEnemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
                    }
            }
        };
    };
});                          //有傳入
$(document).keydown(function(event){
    var targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;
    event.preventDefault();
    switch(event.which){
        case 37:
            targetImgMainX = currentImgMainX-200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 175;//為了讓主角轉頭
            break;
        case 38:
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY-200;
            cutImagePositionX = 355;
            break;
        case 39:
            targetImgMainX = currentImgMainX+200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 540;
            break;
        case 40:
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY+200;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }
    if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 && targetImgMainY>=0)
    {
        targetBlock=targetImgMainX/200+targetImgMainY/200*3;
    }else
    {
        targetBlock=-1;
    }
    ctx.clearRect(currentImgMainX, currentImgMainY,200,200);
    if(targetBlock==-1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3)
    {                 //或者
        
    }
    else
    {
        $("#talkBox").text("");
        currentImgMainX=targetImgMainX;
        currentImgMainY=targetImgMainY;
    }
        ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,200,200);
    switch(mapArray[targetBlock])
        {
            case undefined:
                $("#talkBox").text("邊界==");
            break;
            case 1:
                $("#talkBox").text("一天一蘋果");
            break;
            case 2:
                $("#talkBox").text("有好健康!");
            break;
            case 3:
                $("#talkBox").text("挖健康亮紅燈");
            break; 
        }
});                  