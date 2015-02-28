module.exports = function(app) {
  app.get('/', function(request, response) {response.send('Hello World!');});

  var users;
  users = require('../controllers/users_controller.js');
  app.get('/users', users.index);
  app.post('/users', users.create);
  app.get('/users/:id', users.show);
  app.post('/users/:id/update', users.update);
  return app.post('/users/:id/destroy', users.destroy);
};