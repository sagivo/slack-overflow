var fs = require('fs');
var path = require('path');
var modelsPath =  path.resolve(__dirname,'../app/models');

for (model of fs.readdirSync(modelsPath))
  require( modelsPath + "/" + model );