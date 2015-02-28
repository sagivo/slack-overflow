var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.index = function(req, res) {
  return User.all(function(err, users) {
    if (err) res.send(err);
    return res.json(users);
  });
};

exports.create = function(req, res) {
  return User.create(req.body, function(err) {
    if (err) res.send(err);
    return res.json({ status: 'ok' });
  });
};

exports.show = function(req, res) {
  User.findById(req.params.id).exec(function(err, user) {
    if (err) res.send(err);
    if (!user) { return next(new Error('No user found')); }
    return res.json(user);
  });
};

exports.update = function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
    if (err) res.send(err);
    if (!user) { return next(new Error('No user found')); }
    return res.json({ status: 'ok' });
  });
};

exports.destroy = function(req, res) {
  User.findOneAndRemove(req.params.id, function(err, user) {
    if (err) res.send(err);
    if (!user) { return next(new Error('No user found')); }
    return res.json({ status: 'ok' });
  });
};