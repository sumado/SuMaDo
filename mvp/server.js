
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World');
  
  console.log('get message');
});

app.get('/', function (req, res) {


});

app.get('/pushAlert', function (req, res) {
  res.send('alert push api');
  
  console.log('got message');
});

app.post('/push2', function(req, res) {
  res.send(req.body.title);
  
  console.log("ack: " + req.body.title);
  
});




app.listen(3000);