var express = require('express');
var app = express();
var bodyParser = require('body-parser'); app.use(bodyParser.json()); app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose');
mongoose.connect('mongodb://launch:hackathon2015@dogen.mongohq.com:10017/slack-overflow');

require('./config/init')(app);
require('./config/routes.js')(app)

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log(`Node app is running at localhost: ${ app.get('port') }`);
});

