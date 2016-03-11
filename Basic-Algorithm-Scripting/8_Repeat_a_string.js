/**
 * [repeat]
 * Repeat a string :
 * Repeat a given string (first argument) num times (second argument).
 * Return an empty string if num is a negative number.
 * @param  {[tring} str
 * @param  {Intger} num
 * @return {String}
 */
function repeat(str, num) {

  var strRes = '';

  if (num < 1) {
    return '';
  }

  for (var ii = 0; ii < num; ii++) {

    strRes = strRes + str;

  }

  return strRes;

}

// Use
repeat('abc', 3);