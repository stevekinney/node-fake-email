var formatName = require('./lib/name-formatter');
var affixDisposableSuffix = require('./lib/append-suffix');

module.exports = function(name) {
  return affixDisposableSuffix(formatName(name));
}