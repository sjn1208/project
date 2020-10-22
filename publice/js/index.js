// console.log(require);
// const { $where } = require("../../db/models/userModel")

//进入首页判断是否已登录
if(!localStorage.getItem('login')){
    location.href='./login.html'
}

//显示登录账户
// $where()


// var kmSkilData = [
//     {
//         imgUrl:"image/17.png",
//         proName:"钙尔奇碳酸钙D3片",
//         details:"孕妇哺乳更年期中成人老年补钙",
//         sale:"69",
//         price:"198"
//     },
//     {
//         imgUrl:"image/17.png",
//         proName:"钙尔奇碳酸钙D3片",
//         details:"孕妇哺乳更年期中成人老年补钙",
//         sale:"69",
//         price:"198"
//     },
//     {
//         imgUrl:"image/17.png",
//         proName:"钙尔奇碳酸钙D3片",
//         details:"孕妇哺乳更年期中成人老年补钙",
//         sale:"69",
//         price:"198"
//     },
//     {
//         imgUrl:"image/17.png",
//         proName:"钙尔奇碳酸钙D3片",
//         details:"孕妇哺乳更年期中成人老年补钙",
//         sale:"69",
//         price:"198"
//     }
// ]
// var str = `<div class="l">
// <h2>10点场</h2>
// <span class="line-c"></span>
// <img src="image/16.png"/>
// <p>本场距离结束还剩</p>
// <span class="timer">00</span>
// <span class="timer">00</span>
// <span class="timer">00</span>
// </div>`;
// // $('#km-skil').each(function(){
    
// // })

// kmSkilData.forEach((item,index)=>{
//     str += `
//     <figure class="l">
//         <img src="${item.imgUrl}"/>
//         <figcaption>
//             <h3>${item.proName}</h3>
//             <p>${item.details}</p>
//             <span class="sale">秒杀价<i>￥${item.sale}</i></span>
//             <span class="price">￥${item.price}</span>
//         </figcaption>
//     </figure>
//     `
// })
// $('#km-skil').html(str)



//倒计时


function go(){
    var time1 = new Date();
    var time2 = new Date(2020,10,23,10,00,00);
    var conS = Math.floor((time2.getTime()-time1.getTime())/1000);
    var d = Math.floor(conS/86400) < 10 ? '0' + Math.floor(conS / 86400) : Math.floor(conS / 86400);
    var h = Math.floor(conS%86400/3600) < 10 ? '0' + Math.floor(conS % 86400 / 3600) : Math.floor(conS % 86400 / 3600);
    var m = Math.floor(conS%86400%3600/60) < 10 ? '0' + Math.floor(conS % 86400 % 3600 / 60) : Math.floor(conS % 86400 % 3600 / 60);
    var s = Math.floor(conS%60) < 10 ? '0' + conS % 60 : conS % 60;
    $('#h').html(h);
    $('#m').html(m);
    $('#s').html(s);    
}
go();
var time = setInterval(go,1000);

// function timers(time){
//     var tenTime = new Date(time);
//     setInterval(function(){
//         var 
//     })
// }