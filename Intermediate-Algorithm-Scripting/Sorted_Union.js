/**
 * [unite]
 * Sorted Union :
 * Function that takes two or more arrays and returns a new array of unique
 * values in the order of the original provided arrays.
 * @param  {Array} arr1
 * @param  {Array} arr2
 * @param  {Array} arr3
 * @return {Array}
 */
function unite(arr1, arr2, arr3) {

  var newArr = [];

  for (var ii = 0; ii < arguments.length; ii++) {
    newArr = newArr.concat(arguments[ii]);
  }

  newArr.map(function(val, index) {
    var jj = newArr.indexOf(val, index + 1);

    while (jj > 0) {
      newArr.splice(jj, 1);
      jj = newArr.indexOf(val, jj + 1);
    }
  });

  return newArr;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);