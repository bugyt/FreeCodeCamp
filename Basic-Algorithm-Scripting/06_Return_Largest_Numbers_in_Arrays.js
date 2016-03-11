/**
 * [largestOfFour]
 * Return Largest Numbers in Arrays :
 * Return an array consisting of the largest number from each provided sub-array.
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function largestOfFour(arr) {

  var newArray = [];

  function sortDescNumber(a, b) {
    return b - a;
  }

  for (var ii = 0; ii < arr.length; ii++) {
    arr[ii].sort(sortDescNumber);
    newArray.push(arr[ii][0]);
  }
  // You can do this!
  return newArray;
}

// Use
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);