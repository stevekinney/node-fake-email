var assert = require('assert');
var generate = require('../');

describe('Fake Email Address Generator', function() {
  
  it('should generate a valid email address', function() {
    var name = "Steve Kinney";
    for(var i; i < 10; i++) {
      assert.ok(!!generate(name).match(/^(.+)@\w+\.\w{3}$/));
    }
  });
  
  it('should strip out apostrophes from names', function () {
    var name = "Brian O'Connell";
    for(var i; i < 20; i++) {
      assert.ok(!generate(name).match("'"));
    }
  });
  
});
