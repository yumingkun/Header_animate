// 获取元素
let getElem=function (selector) {
    return document.querySelector(selector)
};

let getAllElem=function (selector) {
    return document.querySelectorAll(selector);
};


// ：导航栏滑动效果
let navItems=getAllElem('.header_nav-item');//获取所有的导航项
let navTip=getElem('.header_nav-tip');//获取导航下的红条
let setTip=function (index) {

    navItems[index].onclick=function () {
        navTip.style.left=(index*100 )+'px'
    };


};
for (let i=0;i<navItems.length;i++){
    setTip(i);
}