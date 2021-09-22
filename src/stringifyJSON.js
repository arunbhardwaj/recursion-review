// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// I: a javascript data type
// O: the stringified version of the input value
// E: if obj === function || obj === undefined, we're going to return an empty object literal

var stringifyJSON = function(obj) {
  // console.log(obj);

  if (typeof obj === 'string') {
    // console.log(obj + ' is a string');
    return '"' + obj + '"';
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'object') { // [8],
    // console.log('obj is a collection');

    if (Array.isArray(obj)) {
      var result = '[';

      for (var i = 0; i < obj.length; i++) {
        if (i !== obj.length - 1) {
          result += stringifyJSON(obj[i]) + ',';
        } else {
          result += stringifyJSON(obj[i]);
        }
      }

      result += ']';
      return result;
    } else {
      // edge cases: functions, undefined
      if (!Object.keys(obj).length) {
        return '{}';
      }

      var result = '{';

      for (var key in obj) {

        if ((typeof obj[key] === 'function') || (typeof obj[key] === 'undefined')) {
          continue;
        } else {
          result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ','; // {'key' : 'value'}
        }


      }

      if (result.length > 1) {
        result = result.slice(0, result.length - 1);
      }

      result += '}';
      return result;
    }
  } else {
    // console.log('obj is none of the above');

    return obj + '';
  }

};