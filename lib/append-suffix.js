var _ = require('underscore');

module.exports = function(name) {
  
  var disposableSuffixes = [
  	"@putthisinyourspamdatabase.com",
  	"@thisisnotmyrealemail.com",
  	"@binkmail.com",
  	"@spamhereplease.com",
  	"@spamherelots.com",
  	"@sendspamhere.com",
  	"@chogmail.com",
  	"@spamthisplease.com",
  	"@frapmail.com",
  	"@obobbo.com",
  	"@devnullmail.com",
  	"@example.com",
    "@example.net",
    "@example.org",
    "@mailinator.com"
  ];
  
  return name + _.shuffle(disposableSuffixes)[0]
  
}