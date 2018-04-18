var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

// an express middleware: let's us do something with every request
// req: request for a file
// res: response << we can update what get's sent back
// next: called when the middleware is done
app.use(function (req, res, next) {
  // check if traffic is over http if not redirect it since
  // openWeatherMap only works with http requests
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }

});

// folder to serve
app.use(express.static('public'));

// port, function
app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
