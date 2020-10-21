const express = require('express')
const router = express.Router()
const User = require('../db/models/userModel')

router.post('/login',(req,res)=>{
  // 接收数据，处理数据，返回数据
  let {user,pass} = req.body

  // 空值判断
  if (!user || !pass) {
    return res.send({err: -1,msg: '参数不能为空'})
  }

  // 查询数据库
  User.find({user,pass})
  .then((data)=>{
    if (data.length > 0) {
      res.send({err: 0,msg: '登录成功'})
    } else {
      // 数据库没有此账号
      res.send({err: -1,msg: '账号或密码错误'})
    }
  })
  .catch((err)=>{
    console.log(err)
  })
})



 
module.exports = router

