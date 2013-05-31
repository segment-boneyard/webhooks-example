
var express = require('express')
  , app = express()
  , port = 3000;


/**
 * Give us nice, JSON request bodies.
 */

app.use(express.bodyParser());


/**
 * Add a route for our webhook POST requests.
 */

app.post('/webhooks/analytics', function (req, res) {
  console.log(req.body);
  res.end();
});


/**
 * Listen.
 */

app.listen(port, function () {
  console.log('Server is listening on port ' + port + '...');
});