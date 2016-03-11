/**
 * [add]
 * Arguments Optional :
 * Function that sums two arguments together.
 * If only one argument is provided, then return a function
 * that expects one argument and returns the sum.
 */
function add() {

  for (var ii = 0; ii < arguments.length; ii++) {
    if (!Number.isInteger(arguments[ii])) {
      return undefined;
    }
  }

  var x = arguments[0];

  return (arguments.length < 2) ? function(y) { return add(x, y); } : arguments[0] + arguments[1];

}

add(2, 3);