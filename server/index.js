var express = require('express');
var  app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var cors = require('cors');
app.use(cors());
//关闭同源策略 可以跨域请求了!

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/express-api');


var Post = require('./models/post');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});


app.get('/posts', function(req, res) {
  Post.find().exec(function(err, posts) {
    res.json({ posts: posts})
  });
})
app.post('/posts', function(req, res) {
  // res.send('the post title is: ' + req.body.title)
  var post = new Post({
    title: req.body.title,
    content: req.body.content,
    type: req.body.type
  });
  post.save(function(err){
    if(err) return console.log(err);
    console.log('saved!');
  })
  res.json({"message":"success"})
  // res.redirect('/posts');
})
// app.get('/posts/:id', function(req, res) {
//   Post.findById(req.params.id,function(err, posts) {
//     res.json({ posts: posts})
//   });
//   // res.redirect('/posts');
// })

app.get('/posts/:id', function(req, res) {
  Post.findById(req.params.id,function(err, info) {
    if (err) {
      return res.send("出错了")
    }
    else{
      res.json(info)
    }
  });
})
app.listen(3000, function() {
  console.log('running on port 3000')
})
