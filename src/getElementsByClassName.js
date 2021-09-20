// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// I: a string representing our target class name
// O: an array of elements with class names that match target class name

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  // Isolate the head node of the DOM
  var root = document.body;

  var innerFunction = function(node) {
    // Check if the head node contains the target className
    if (node.classList && node.classList.contains(className)) {
      result.push(node);
    }

    // if head node has child nodes...
    if (node.hasChildNodes()) {
      for (var i = 0; i < node.childNodes.length; i++) {
        innerFunction(node.childNodes[i]);
      }
    }
  };
  innerFunction(root);

  return result;
};
