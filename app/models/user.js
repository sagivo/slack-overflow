var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Award = mongoose.model('Award');

var UserSchema = new Schema({
  name: {type: String},
  email: { type: String, required: true, index: true, unique: true },
  phone: { type: String },
  token: { type: String },
  Job: String,
  created: { type: Date, "default": Date.now },
  pic: { type: String },
  tags: [{ name: String, count: Number }],
  badges_pull: [{ type: Schema.Types.ObjectId, ref: 'Badge' }],
  badges_got: [{ type: Schema.Types.ObjectId, ref: 'Badge' }]
});

UserSchema.set('autoIndex', false);

UserSchema.statics = {
  all: function(cb) { return this.find().exec(cb); }
};

UserSchema.virtual('name2').get(function() {
  return this.name.first + ' ' + this.name.last;
});

UserSchema.formage = {
    singular: 'user',
    order_by: ['id']    
};

var User = mongoose.model('User', UserSchema);
