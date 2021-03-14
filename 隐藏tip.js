var div = document.getElementsByClassName('upload')[0];
var van = document.getElementsByClassName('van-popover')[0];
var first = 0,
    second = 0;
div.onmouseenter = function (){
    van.style.display = 'block';
    clearInterval(div.timer);
    div.timer = '';
}
div.onmouseleave = function (){
    first = new Date().getTime();
        div.timer = setInterval(function () {
        second = new Date().getTime();
        if(second - first >= 300){
            van.style.display = 'none';
        }
    },10);
}
van.onmouseenter = function (){
    van.style.display = 'block';
    clearInterval(div.timer);
    div.timer = '';
}
van.onmouseleave = function (){
    first = new Date().getTime();
        div.timer = setInterval(function () {
        second = new Date().getTime();
        if(second - first >= 300){
            van.style.display = 'none';
        }
    },10);
}