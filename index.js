var express = require('express')
var app = express()
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());//用于使用body中间件截取数据

mongoose.Promise = global.Promise;// 用来在命令行只显示自己需要的信息,不需要的乱七八糟的不要显示
mongoose.connect('mongodb://localhost:27017/express-api') //上面两行连接数据库

var Post = require('./models/post.js') //连上集合

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});


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
  var post = new Post({title:req.body.title})
  post.save(function(err){
    if (err) {
      console.log(err);
    }
    else{
      console.log('saved');
    }
  })
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
