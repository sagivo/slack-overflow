var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String },
  email: { type: String, required: true, index: true, unique: true },
  phone: { type: String },
  token: { type: String },
  created: { type: Date, "default": Date.now },
  bio: { type: String },
  badges_got: [{ type: Schema.Types.ObjectId, ref: 'Badge' }],
  badges_pull: [{ type: Schema.Types.ObjectId, ref: 'Badge' }]
});

UserSchema.set('autoIndex', false);

UserSchema.statics = {
  all: function(cb) { return this.find().exec(cb); }
};

UserSchema.virtual('name').get(function() {
  return this.name.first + ' ' + this.name.last;
});

var User = mongoose.model('User', UserSchema);