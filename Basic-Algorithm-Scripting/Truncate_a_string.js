/**
 * [truncate]
 * Truncate a string :
 * Truncate a string (first argument) if it is longer than the given maximum
 * string length (second argument).
 * Return the truncated string with a "..." ending.
 * @param  {[String]} str
 * @param  {[Integer]} num
 * @return {[String]}
 */
function truncate(str, num) {

  var cplmt = '...';
  if (str.length <= num) {
    return str;
  }
  str = str.slice(0, num - (cplmt.length * (num > 3))) + cplmt;

  return str;

}

// Use
truncate('A-tisket a-tasket A green and yellow basket', 11);