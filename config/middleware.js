var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {
  validate: function(req, res, next) {
    var token = req.query.token ? req.query.token : '1';
    User.findOne({token: token}, function(err, user){
      if (err || !user) return res.json({err: 'bad token'});
      req.user = user;
      next();
    });
  }
};