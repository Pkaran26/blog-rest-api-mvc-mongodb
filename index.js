var express = require('express');
var bodyParser = require('body-parser');
var userRoute = require('./src/routes/userRoute');
var articleRoute = require('./src/routes/articleRoute');

var app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.use('/user', userRoute);
app.use('/article', articleRoute);

app.listen(3000, ()=>{
  console.log('server running...');
})
