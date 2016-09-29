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
