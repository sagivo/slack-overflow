var fs = require('fs');
var path = require('path');
var modelsPath =  path.resolve(__dirname,'../app/models');

for (model of fs.readdirSync(modelsPath))
  require( modelsPath + "/" + model );

module.exports = function(app) {
  /*
  var gun = require('gun')({file: 'data.json'});
  gun.set({key: "val"}).key('hello');
  gun.load('hello').get(function(data){
    console.log(data.key);
  });
  */
};

