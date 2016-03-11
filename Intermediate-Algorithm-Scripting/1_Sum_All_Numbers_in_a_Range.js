/**
 * [sumAll description]
 * Sum All Numbers in a Range :
 * Return the sum of an array of two numbers and all numbers between them.
 * @param  {[Array]} arr
 * @return {[Integer]}
 */
function sumAll(arr) {

  function sortAscNumber(a, b) {

    return a - b;

  }

  var sum = 0;

  arr.sort(sortAscNumber);

  for (var ii = arr[0]; ii <= arr[1]; ii++) {

    sum += ii;

  }

  return sum;

}

// Use
sumAll([1, 4]);