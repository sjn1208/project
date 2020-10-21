const express=require('express')//引入express框架
const db=require('./db/connect')//引入数据库
const userRouter=require('./router/userRouter')//引入userRout
const bodyParser = require('body-parser')
const path=require('path')
const cors=require('cors')
console.log(require,'server.js');


const app=express()//实例化
//设置静态目录
app.use('/static',express.static(path.join(__dirname,'./publice')))
app.use('/',bodyParser.json()) //解析json数据
app.use('/',bodyParser.urlencoded({extened: false})) // 解析表单数据
app.use(cors())
//先解析
app.use('/user',userRouter)


app.listen(3058,()=>{
    console.log("----------server start-----------")
})