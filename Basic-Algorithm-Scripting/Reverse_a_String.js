/**
 * [reverseString]
 * Rverse a string.
 * @param  {String} str
 * @return {String}
 */
function reverseString(str) {

  var myArray = str.split('');
  myArray.reverse();
  str = myArray.join('');

  return str;

}
// Use
reverseString('hello');