/**
 * [factorialize]
 * Factorialize a Number.
 * @param  {Integer} num
 * @return {Integer}
 */
function factorialize(num) {

  var result;

  for (var ii = 2; ii <= num; ii++) {

    result *= ii;

  }

  return result;

}

// Use
factorialize(5);
