/**
 * [mutation]
 * Mutations :
 * Return true if the string in the first element of the array
 * contains all of the letters of the string in the second element of the array.
 * @param  {[Array]} arr
 * @return {[Boolean]}
 */
function mutation(arr) {

  var tmpArray = arr[1].toLowerCase().split('');
  var res = true;

  tmpArray.forEach(function(element) {
    if (arr[0].toLowerCase().indexOf(element) < 0) {
      res = false;
    }
  });

  return res;
}

// Use
mutation(['hello', 'hey']);