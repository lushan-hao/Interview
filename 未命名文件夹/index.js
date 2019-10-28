var timer = false;
window.onscroll = function(){
    clearTimeout(timer); // 清除未执行的代码，重置回初始化状态
    timer = setTimeout(function(){
        console.log("函数防抖");
    }, 300);
};  