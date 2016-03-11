/**
 * Check for Palindromes
 * Return true if the given string is a palindrome. Otherwise, return false.
 * @param {String} str
 * @return {Boolean}
 */
function palindrome(str) {

  var strReverse;
  var myArray;

  str = str.toLowerCase().replace(/(\W)/gi, '').replace('_', '');

  myArray = str.split('');
  myArray.reverse();
  strReverse = myArray.join('');

  if (str === strReverse) {
    return true;
  }

  return false;

}
// Use
palindrome('eye');