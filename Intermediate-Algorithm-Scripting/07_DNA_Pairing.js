/**
 * [pair]
 * DNA Pairing :
 * Take each character, get its pair, and return the results as a 2d array.
 * @param  {String} str
 * @return {String}
 */
function pair(str) {

  function splitArray(arr) {
    var result = [];
    var i = 0;

    for (i = 0; i < arr.length; i++) {
      result.push(arr.slice(i, i + 1));
    }

    result.map(function(val) {
      switch (val[0]) {
        case 'A':
          val.push('T');
          break;
        case 'T':
          val.push('A');
          break;
        case 'G':
          val.push('C');
          break;
        case 'C':
          val.push('G');
          break;
      }
    });

    return result;

  }

  return splitArray(str.split(''));
}

// Use
pair('GCG');