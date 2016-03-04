/**
 * [slasher]
 * Slasher Flick :
 * Return the remaining elements of an array after chopping off
 * n elements from the head.
 * @param  {[Array]} arr
 * @param  {[Integer]} howMany
 * @return {[Array]}
 */
function slasher(arr, howMany) {

  arr.splice(0, howMany);

  return arr;
}

// Use
slasher([1, 2, 3], 2);
