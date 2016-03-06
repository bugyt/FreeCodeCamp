/**
 * [smallestCommons]
 * Smallest Common Multiple :
 * Find the smallest common multiple of the provided parameters
 * that can be evenly divided by both, as well as by all sequentia
 * numbers in the range between these parameters.
 * @param  {Array} arr
 * @return {Integer}
 */
function smallestCommons(arr) {

  function sortAscNumber(a, b) {
    return a - b;
  }

  var res = 0;
  var ii = 1;

  arr.sort(sortAscNumber);

  while (res === 0) {

    res = arr[1] * (arr[1] - 1) * ii;

    for (var jj = arr[0] + 1; jj < arr[1]; jj++) {

      if (res % jj !== 0) {

        res = 0;
        break;

      }

    }

    ii++;
  }

  return res;

}


smallestCommons([1, 5]);