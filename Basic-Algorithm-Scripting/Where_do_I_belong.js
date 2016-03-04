/**
 * [where]
 * Where do I belong :
 * Return the lowest index at which a value (second argument) should be
 * inserted into an array (first argument) once it has been sorted.
 * @param  {[type]} arr [description]
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */

function where(arr, num) {
  // Find my place in this sorted array.
  function sortAscNumber(a,b) {
    return a - b;
  }
  arr.sort(sortAscNumber);

  for (var ii = 0; ii < arr.length; ii++) {
    if (num <= arr[ii]) {
      return ii;
    }
    if ((ii + 1) > (arr.length - 1)) {
      return ii + 1;
    }
    if (num > arr[ii] && num <= arr[ii + 1]) {
      return ii + 1;
    }
  }
}
// Use
where([40, 60], 50);