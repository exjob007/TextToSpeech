const say = require('say')
var express = require('express')
var app = express()
const path = require('path')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var port = process.env.port || 1234
app.listen(port, ()=>{
    console.log('port start : 1234')
})

app.get('/' , (req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})
app.post('/text', (req,res)=>{
    console.log(req.body.text)
    //say.speak(req.body.text, 1)

})


