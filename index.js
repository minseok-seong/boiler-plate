const express = require('express')
const app = express()
const port = 5000
const {User} = require('./model/User')

const config = require('./config/key')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
//

const mongoose  = require('mongoose')
const { json } = require('express')
mongoose.connect(config.mongoURI,{
    useNewUrlParser : true, useUnifiedTopology : true
}).then(() =>{
    console.log("Good")
}).catch((err) => {
    console.log(`$(err)`)
})


app.post('/register',(req,res) => {
  //회원가입 할때 필요한 정보를 가져오면
  //그것들을 db에 넣어준다
  const user = new User(req.body)
  user.save((err,userInfo) => {
    if(err) return res.json({success:false, err})
    return res.status(200),json({
      success:true
    })
  })

}) 

app.get('/', (req, res) => {
  res.send('Hello World!222')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})