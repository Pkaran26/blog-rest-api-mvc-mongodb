var mongoose = require('mongoose');
var schema = mongoose.Schema;

var UserSchema = ({
  username: String,
  first_name: String,
  last_name: String,
  email: String,
  mobile: {
    type: Number,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'User phone number required']
  },
  join_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('user', UserSchema);
