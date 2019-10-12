var mongoose = require('mongoose');
var schema = mongoose.Schema;

var UserSchema = ({
  username: String,
  first_name: String,
  last_name: String,
  email: String,
  mobile: Number,
  join_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('user', UserSchema);
