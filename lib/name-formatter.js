var _ = require('underscore');

module.exports = function(name) {
  
  var nameConversions = [
    initials = /^(\w).*\s(\w).*$/,
    firstInitialAndLastName = /^(\w).*\s(\w+)$/,
    firstAndLastName = /^(\w+)\s(\w+)$/,
    firstNameAndLastInitial = /^(\w+)\s(\w).+$/
  ];
  
  var emailDelimiters = [
    contiguous = "$1$2",
    dot = "$1.$2",
    dash = "$1-$2",
    underscore = "$1_$2",
    reversed = "$2$1",
    reversedDot = "$2.$1",
    reversedDash = "$2-$1",
    reversedUnderscore = "$2_$1",
    justLastName = "$2",
    justFirstName = "$1"
  ];
  
  return name
    .toLowerCase()
    .replace("'", "")
    .replace(
      _.shuffle(nameConversions)[0],
      _.shuffle(emailDelimiters)[0]
    ) + randomSuffix();
  
};

// Generate the random chance that a random number 
// will be affixed to the end

function randomSuffix() {
  
  var randomChance = Math.round(Math.random());
  
  if ( randomChance ) {
    return Math.floor(Math.random()*101);
  } else {
    return "";
  }
  
}
