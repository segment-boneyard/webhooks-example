
var express = require('express');

var app  = express()
  , port = 3000;

app.use(express.bodyParser());

app.post('/webhooks/analytics', function(req, res){
  console.log(req.body);
  res.end();
});

app.listen(port);

console.log('Server is running on port: ' + port);