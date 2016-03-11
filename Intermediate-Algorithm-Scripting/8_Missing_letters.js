/**
 * [fearNotLetter]
 * Missing letters :
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 * @param  {String} str
 * @return {String}
 */
function fearNotLetter(str) {

  for (var ii = 0; ii < str.length - 1; ii++) {

    if (str[ii + 1].charCodeAt() !== str[ii].charCodeAt() + 1) {
      return String.fromCharCode(str[ii].charCodeAt() + 1);
    }
  }
  return;
}

// Use
fearNotLetter('abce');