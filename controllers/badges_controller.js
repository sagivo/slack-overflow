var mongoose = require('mongoose');
var Badge = mongoose.model('Badge');

exports.index = function(req, res) {
  return Badge.all(function(err, Badges) {
    if (err) res.send(err);
    return res.json(Badges);
  });
};

exports.create = function(req, res) {
  return res.json(req.body);
  return Badge.create(req.body, function(err) {
    if (err) res.send(err);
    return res.json({ status: 'ok' });
  });
};

exports.show = function(req, res) {
  Badge.findById(req.params.id).exec(function(err, Badge) {
    if (err) res.send(err);
    if (!Badge) { return next(new Error('No Badge found')); }
    return res.json(Badge);
  });
};

exports.update = function(req, res) {
  Badge.findByIdAndUpdate(req.params.id, req.body, function(err, Badge) {
    if (err) res.send(err);
    if (!Badge) { return next(new Error('No Badge found')); }
    return res.json({ status: 'ok' });
  });
};

exports.destroy = function(req, res) {
  Badge.findOneAndRemove(req.params.id, function(err, Badge) {
    if (err) res.send(err);
    if (!Badge) { return next(new Error('No Badge found')); }
    return res.json({ status: 'ok' });
  });
};