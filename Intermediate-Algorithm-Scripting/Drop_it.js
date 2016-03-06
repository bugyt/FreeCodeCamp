/**
 * [drop]
 * Drop it :
 * Drop the elements of an array (first argument),
 * starting from the front, until the predicate (second argument) returns true.
 * @param  {Array} arr
 * @param  {Function} func
 * @return {Array}
 */
function drop(arr, func) {
  // Drop them elements.

  while (!func(arr[0])) {
    arr.shift();
  }
  return arr;

}

drop([1, 2, 3], function(n) {
  return n < 3;
});