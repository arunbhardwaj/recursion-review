// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

var JSON_GLOBAL = '';

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  JSON_GLOBAL = json;

  // Lexer
  var tokens = lex();

  console.log(tokens);

};

var lex = function() {
  var tokens = [];

  while (JSON_GLOBAL.length > 0) {
    tokens.push(lex_strings());
    // break;
  }

  return tokens;
}

// Check if character is a string
var lex_strings = function() {
  var string = '';
  if (JSON_GLOBAL[0] === '"') {
    for (var i = 1; i < JSON_GLOBAL.length; i++) {
      if (JSON_GLOBAL[i] === '"') {
        JSON_GLOBAL = JSON_GLOBAL.substring(i+1);
        break;
      }
      string += JSON_GLOBAL[i];
    }
  }
  return string;
}

var lex_values = function() {
  // number
  // boolean
  // null

}

var lex_numbers = function() {
  var string = '';



  // negatives

  // decimals

  // regular
}
