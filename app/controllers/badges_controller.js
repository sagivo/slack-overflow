var mongoose = require('mongoose');
var Badge = mongoose.model('Badge');
var gun = require('gun')({file: 'data.json'});

exports.index = function(req, res) {
  return Badge.all(function(err, Badges) {
    if (err) res.send(err);
    return res.json(Badges);
  });
};

exports.create = function(req, res) {
  Badge.create(req.body, function(err) {
    if (err) res.send(err);
    return res.json({ status: 'ok' });
    gun.set(req.body).key('badges/' + req.body.name);    
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