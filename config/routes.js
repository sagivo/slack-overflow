m = require('./middleware') 

module.exports = function(app) {
  app.get('/', function(request, response) {response.send('Hello World!');});

  var users = require('../app/controllers/users_controller.js');
  app.get('/users', m.validate, users.index);
  app.get('/sendmail', users.sendmail);
  app.post('/users', users.create);
  app.post('/users/:id/update', users.update);
  app.post('/users/:id/update', users.update);
  app.post('/users/:to/give', m.validate, users.give);
  app.get('/users/:id', m.validate, users.show);
  app.get('/feed', m.validate, users.feed);

  var badges = require('../app/controllers/badges_controller.js');
  app.get('/badges', badges.index);
  app.post('/badges', badges.create);
  app.get('/badges/:id', badges.show);
  app.post('/badges/:id/update', badges.update);
  app.post('/badges/:id/destroy', m.validate, badges.destroy);  

};