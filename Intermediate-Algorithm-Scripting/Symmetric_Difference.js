/**
 * [sym]
 * Symmetric Difference :
 * function that takes two or more arrays and returns an array
 * of the symmetric difference (△ or ⊕) of the provided arrays.
 * @param  {Arrays} args
 * @return {Array}
 */
function sym(args) {

  var newArr = [];
  var argum = arguments;

  function sortAscNumber(a, b) {
    return a - b;
  }

  function filtrer(arr1, arr2) {
    return arr1.filter(function(val) {
      return arr2.indexOf(val) === -1;
    });
  }


  for (var ii = 0; ii < argum.length - 1; ii++) {

    newArr = filtrer(argum[ii], argum[ii + 1]).concat(filtrer(argum[ii + 1], argum[ii]));

    argum[ii + 1] = newArr;

  }
  console.log(newArr.sort(sortAscNumber));

  return newArr.sort(sortAscNumber).filter(function(item, idx, arr) {
    return arr.indexOf(item) === idx;
  });
}

sym([1, 2, 3], [5, 2, 1, 4]);