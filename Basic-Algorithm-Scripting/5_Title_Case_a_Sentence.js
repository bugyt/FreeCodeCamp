/**
 * [titleCase]
 * Return the provided string with the first letter of each word capitalized.
 * @param  {[String]} str
 * @return {[String]}
 */
function titleCase(str) {

  var myArray = str.split(' ');

  myArray = myArray.map(function(val) {
    val = val.toLowerCase();
    return val.charAt(0).toUpperCase() + val.slice(1);
  });

  str = myArray.join(' ');

  return str;

}

// Use
titleCase('I\'m a little tea pot');