var sparkpost = require('sparkpost')({key: '45b9658517331c099cc4cc2b7940a2b7a5f1d8b1'});

var trans = {};

// Set some metadata for your email
trans.campaign = 'first-mailing';
trans.from = 'mailer@mail.tackapp.club';
trans.subject = 'First SDK Mailing';

// Add some content to your email
trans.html = '<html><body><h1>Congratulations, Roojuta!</h1><p>You just got tacked!</p></body></html>';
trans.text = 'Congratulations, Roojuta, Adam tacked you as Java expert. Check out tackapp.club for more details';
trans.substitutionData = {name: 'Tack App'};

// Pick someone to receive your email
trans.recipients = [{ address: { name: 'Roojuta Lalani', email: 'roojuta99@yahoo.co.in' } }];

// Send it off into the world!
sparkpost.transmission.send(trans, function(err, res) {
  if (err) {
    console.log('Whoops! Something went wrong');
    console.log(err);
  } else {
    console.log('Woohoo! You just sent your first mailing!');
  }
});