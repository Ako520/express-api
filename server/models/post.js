
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    uid:String,
    title: String,
    content: String,
    type: String,
    createTime: {
        type: Date,
        default: Date.now
    }

  },
  {
    timestamps: true
  }		    
)

module.exports = mongoose.model('Post', PostSchema);
