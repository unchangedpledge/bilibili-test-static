//图片滚动的动画
function animate(obj, target) {
    clearInterval(obj.timer);
    step = obj.offsetLeft > target ? -9 : 9;
    obj.timer = setInterval(function() {
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
        }else{
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 2);
}

//右侧导航
var sort = document.getElementsByClassName('sort')[0];
var bg23 = document.getElementsByClassName("bg23")[0];
var mask = document.getElementsByClassName("mask")[0];
var count = 0;
sort.onclick = function() {
    count++;
    if(count % 2 == 1 ){
        bg23.style.display = "block";
        mask.style.display = "block";
    }else{
        bg23.style.display = "none";
        mask.style.display = "none";
    }
}

//轮播图
var ggc = document.getElementsByClassName('ggc')[0];
var slider = document.getElementsByClassName('slider')[0];
var trigger = document.getElementsByClassName('trigger')[0];
var ggcWidth = ggc.offsetWidth;
slider.addEventListener('mouseenter', function () {//移入时停止
    clearInterval(timer);
    timer = null;
});
slider.addEventListener('mouseleave',function () {//移出时开启
    timer = setInterval(function () {
        if(num == slider.children.length - 1){//滚动到最后一张时，快速变为left = 0
            slider.style.left = 0;
            num = 0;
        }
        num++;//必须放后面才会先执行动画再跳转图片
        circle++;
        animate(slider, -num * ggcWidth);
        if(circle == slider.children.length - 1) {//到最后复制的那一张时，circle的值还原
            circle = 0;
        }
        for(var i = 0; i < trigger.children.length; i++){
            trigger.children[i].className = '';
        }
        trigger.children[circle].className = 'current';
    }, 5000);
});

for(var i = 0; i < slider.children.length; i++){
    var span = document.createElement("span");
    span.index = i;//添加焦点位置
    trigger.appendChild(span);
    span.addEventListener("click", function () {
        for(var j = 0; j < trigger.children.length; j++){
            trigger.children[j].className = '';
        }
        this.className = 'current';
        num = this.index;//将索引号赋值给num
        circle = this.index;//将索引号赋值给circle
        animate(slider, -this.index * ggcWidth);
    });
}
trigger.children[0].className = 'current';
var first = slider.children[0].cloneNode(true);//深克隆第一张
slider.appendChild(first);

//自动播放
var num = 0;//滚动次数
var circle = 0;//焦点的移动
var timer = setInterval(function () {
    if(num == slider.children.length - 1){//滚动到最后一张时，快速变为left = 0
        slider.style.left = 0;
        num = 0;
    }
    num++;//必须放后面才会先执行动画再跳转图片
    circle++;
    animate(slider, -num * ggcWidth);
    if(circle == slider.children.length - 1) {//到最后复制的那一张时，circle的值还原
        circle = 0;
    }
    for(var i = 0; i < trigger.children.length; i++){
        trigger.children[i].className = '';
    }
    trigger.children[circle].className = 'current';
}, 5000);











