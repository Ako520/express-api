// //step 1
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/express-api');
//
// //step 2
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("恭喜您和队友开黑成功,再次进攻吧 (=￣ω￣=)");
//   //step 3
//
//   var userSchema = mongoose.Schema({
//     username: String,
//     password: String
//   });
//
//   //step 4
//
//   var LogInfo = mongoose.model('log', userSchema);
//
//   // step 5
//
//   // var loginfo = new LogInfo({ username: 'Ako',password:'123456' });
//   // console.log(loginfo.username); // 'Silence'
//
//
//
//   // LogInfo.findById({"_id":"57ecb6a5ebaaf026e0f9965a"},function(err, logs) {
//   //   logs.username='Dotee'
//   //   logs.password='654321'
//   //   logs.save(function functionName() {
//   //     console.log(3);
//   //     console.log(logs);
//   //   });
//   //   logs.remove(function (err) {
//   //     console.log("删除啦");
//   //   });
//   //   console.log(2);
//   // })
//   // console.log(1);
//
//
// });




var express = require('express')
var app = express()
app.get('/',function (req,res) {
  res.send('咯咯')
})
app.get('/posts',function (req,res) {
  res.send('GET /posts')
})
app.put('/posts/:id',function (req,res) {
  console.log('更新')
  res.send('更新了')
})
app.post('/posts/',function (req,res) {
  console.log('post')
})
app.delete('/posts/"id"',function (req,res) {
  console.log('删掉')
})

// app.get('/:name', function (req, res) {
//   var username= req.params.name;
//   var page = "<html>"+
//                 "<body>"+
//                   "<h1>"+
//                   username+"的购物车"
//                   "</h1>"+
//                 "</body>"+
//               "</html>";
//   res.send(page);
// })
// app.post('/www/qqq', function (req, res) {
//   req.send('a POST request receive')
// })
app.listen(3003,function () {
  console.log("恭喜您启动node成功，访问locallhost:3003继续努力吧")
})
