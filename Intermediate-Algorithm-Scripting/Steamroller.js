/**
 * [steamroller]
 * Steamroller :
 * Flatten a nested array with various levels of nesting.
 * @param  {Array} arr
 * @return {Array}
 */
function steamroller(arr) {

  // I'm a steamroller, baby
  var flatArr = [];

  function flat(nestedArr) {

    if (Array.isArray(nestedArr)) {

      nestedArr.forEach(function(val) {

        flat(val);

      });

    } else {

      flatArr.push(nestedArr);

    }

  }

  flat(arr);

  return flatArr;
}

steamroller([1, [2],
  [3, [
    [4],
  ], ],
]);