var _ = require('underscore'),
    disposableSuffixes = require('./suffixes');

module.exports = function(name) {
  
  return name + "@" + _.shuffle(disposableSuffixes)[0]
  
}
