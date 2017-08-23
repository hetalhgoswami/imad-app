console.log('Loaded!');
alert ('modified main.js');
var element = document.getElementById('main-text');
element.innerHTML = "new text modified by main.js";
var img = document.getElementById('madi');
img.onclick=function() {
img.style.marginLeft='100px';
};
//gradually move the image
/*var marginLeft = 0;
function moveRight() {
marginLeft = marginLeft + 5;
img.style.marginLeft= marginLeft + 'px';
}
img.onclick=function() {
var interval = setInterval(moveRight,50);
};*/




marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight+70);
    
};