console.log(require);
const { $where } = require("../../db/models/userModel")

//进入首页判断是否已登录
if(!localStorage.getItem('login')){
    location.href='./login.html'
}

//显示登录账户
$where()