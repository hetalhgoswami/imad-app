console.log('Loaded!');
// change the text of main-text div
var element =document.getElementById("main-text");
element.innerHTML='New value';
var img= document.getElementById('madi');
var img = document.getElementById("image");
    var marginLeft = 0;
    img.onclick = function() {
        setInterval( function() {
            marginLeft += 10;
            img.style.marginLeft = marginLeft.toString() + "px";
        } , 100);
    };
/*var marginLeft='0';
function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,70);
    img.style.marginLeft='100px';
};*/