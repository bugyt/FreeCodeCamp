/**
 * [chunk]
 * Chunky Monkey :
 * function that splits an array (first argument) into
 * groups the length of size (second argument) and returns
 * them as a two-dimensional array.
 * @param  {[Array]} arr
 * @param  {[Integer]} size [groups size]
 * @return {[Array]}
 */
function chunk(arr, size) {

  var arrayRes = [];

  for (var ii = 0; ii < arr.length; ii += size) {

    arrayRes.push(arr.slice(ii, ii + size));

  }

  return arrayRes;
}

// Use
chunk(['a', 'b', 'c', 'd'], 2);