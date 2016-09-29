var express = require('express')
var app = express()

//step 1
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

//step 2
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

//step 3
var kittySchema = mongoose.Schema({
    name: String
});

//step 4
var Kitten = mongoose.model('Kitten', kittySchema);









//
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
// app.listen(3000,function () {
//   console.log("恭喜您启动node成功，访问locallhost:3000继续努力吧")
// })
