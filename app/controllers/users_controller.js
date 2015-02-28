var mongoose = require('mongoose');
var User = mongoose.model('User');
var Award = mongoose.model('Award');

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

//to_id, badge_id, tag
exports.give = function(req, res) {
  Award.create({from: user.id, to: req.params.to, comment: req.body.comment}, function(err) {
      //add badges and tags to user
      User.findById(req.body.to_id).exec(function(err, reciver) {
        if (err) res.send(err);
        if (!reciver) { return next(new Error('No user found')); }
        reciver.tags.addToSet(tag);
        reciver.badges_got.addToSet(badge_id);
        reciver.badges;
        //TODO: remove 1 from giver pull
        return res.json({ status: 'ok' });  
      });
    });
};