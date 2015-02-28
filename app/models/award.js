var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AwardSchema = new Schema({
  created: { type: Date, "default": Date.now }, 
  from: { type: Schema.Types.ObjectId, ref: 'User' },
  to: { type: Schema.Types.ObjectId, ref: 'User' },
  tag: String,
  comment: String 
});

AwardSchema.set('autoIndex', false);

AwardSchema.statics = {
  all: function(cb) { return this.find().exec(cb); }  
};

var Award = mongoose.model('Award', AwardSchema);