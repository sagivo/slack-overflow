var express = require('express');
var app = express();
var bodyParser = require('body-parser'); app.use(bodyParser.json()); app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

require('./config/init')(app);
require('./config/routes.js')(app)

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  //console.log(`Node app is running at localhost: ${ app.get('port') }`);
  console.log("Node app is running at localhost: " + app.get('port'));
});

/*
var sinchAuth = require('sinch-auth');
var sinchSms = require('sinch-messaging');
var auth = sinchAuth("e36e567c-392f-4ce1-b8e5-6498b0d671e3", "1Xvegkk7sk2XtpOSbCxtnQ==");
sinchSms.sendMessage("+14153518826", "Hello world!");
*/