var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello GuiYuan</h1>')
  console.log("home～");
})
app.get('/qqq', function (req, res) {
  res.send('我是qqq')
  console.log("qqq～");
})
app.listen(3000,function () {
  console.log("恭喜您启动node成功，访问locallhost:3000继续努力吧")
})
