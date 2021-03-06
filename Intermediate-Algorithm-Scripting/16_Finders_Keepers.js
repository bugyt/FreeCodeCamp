/**
 * [find]
 * Finders Keepers :
 * Create a function that looks through an array (first argument)
 * and returns the first element in the array that passes a truth test (second argument).
 * @param  {Array} arr
 * @param  {Function} func
 * @return {Array}
 */
function find(arr, func) {
  return arr.filter(func)[0];
}

find([1, 2, 3, 4], function(num) {
  return num % 2 === 0;
});