/**
 * [destroyer]
 * Seek and Destroy :
 * Remove all elements from the initial array that are of the same value as these arguments.
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function destroyer(arr) {

  var args = arguments;
  var myArray = arguments[0];

  var seek = function(element) {

    return (element !== args[this]);

  };

  for (var ii = 1; ii < arguments.length; ii++) {

    myArray = myArray.filter(seek, ii);

  }

  return myArray;

}

// Use
destroyer([1, 2, 3, 1, 2, 3], 2, 3);