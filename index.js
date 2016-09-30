var express = require('express')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/',function (req,res) {
  res.send('咯咯')
})
app.get('/write',function (req,res) {
  res.send('<form method="post" action="/posts" >'+
  '<input type="text" name="title"/>'+
  '<input type="text" name="content"/>'+
  '<button type="submit">提交</button>'+
'</form>')
})
app.get('/posts',function (req,res) {
  res.send('GET /posts')
})
app.put('/posts/:id',function (req,res) {
  console.log('更新')
  res.send('更新了')
})
app.post('/posts/',function (req,res) {
  console.log('post'+req.body.title)
  res.send(req.body.title)
})
app.delete('/posts/:id',function (req,res) {
  console.log('删掉')
})



/
app.listen(3003,function () {
  console.log("恭喜您启动node成功，访问localhost:3003继续努力吧")
})
