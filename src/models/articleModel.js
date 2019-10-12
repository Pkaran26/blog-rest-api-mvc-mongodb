var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ArticleSchema = ({
  title: String,
  body: String,
  author: {
    type: schema.Types.ObjectId,
    ref: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('article', ArticleSchema);
