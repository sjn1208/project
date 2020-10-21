
// 开始倒计时
timmer('2020.12.18');











/*-------------倒计时---------------*/
function timmer(time) {
    var dateYD = new Date(time);
    setInterval(function(){
        var date = new Date();
        var time = Math.floor((dateYD.getTime() - date.getTime())/1000);
        var d = Math.floor(time / 86400) < 10 ? '0' + Math.floor(time / 86400) : Math.floor(time / 86400);
        var h = Math.floor(time % 86400 / 3600) < 10 ? '0' + Math.floor(time % 86400 / 3600) : Math.floor(time % 86400 / 3600);
        var m = Math.floor(time % 86400 % 3600 / 60) < 10 ? '0' + Math.floor(time % 86400 % 3600 / 60) : Math.floor(time % 86400 % 3600 / 60);
        var s = time % 60 < 10 ? '0' + time % 60 : time % 60;
        $('.d').html(d);
        $('.h').html(h);
        $('.m').html(m);
        $('.s').html(s);
    },1000);
}

/*---------------用户登录--------------*/
$('.btn').click(function(){
    console.log('111');
    let url = 'http://localhost:3058/user/login'
    let data = {
        user : $('#user').val(),
        pass : $('#pass').val()
    }
    $.post(url,data,function(data){
        if(data.err == 0){
            alert(data.msg)
            localStorage.setItem('login','loginSuccess')    //存储登录状态值
            localStorage.setItem('user','userSuccess')      //存储用户名
            location.href="index.html"
        } else{
            alert(data.msg)
        }
    })
})

