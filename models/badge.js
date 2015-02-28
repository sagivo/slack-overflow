var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BadgeSchema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  created: { type: Date, "default": Date.now }  
});

BadgeSchema.set('autoIndex', false);

BadgeSchema.statics = {
  all: function(cb) { return this.find().exec(cb); }
};

var Badge = mongoose.model('Badge', BadgeSchema);