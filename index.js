const express = require('express')
const app = express()
const port = 5000

const mongoose  = require('mongoose')
mongoose.connect('mongodb+srv://imuchgabi:so9889@cluster0.5yzzk.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology : true
}).then(() =>{
    console.log("Good")
}).catch((err) => {
    console.log(`$(err)`)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})