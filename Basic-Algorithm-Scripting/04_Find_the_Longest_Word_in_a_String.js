/**
 * [findLongestWord]
 * Return the length of the longest word in the provided sentence.
 * @param  {String} str
 * @return {Number}     [length of the longest word]
 */
function findLongestWord(str) {

  var myArray = str.split(' ');
  var result = 0;

  for (var ii = 0; ii < myArray.length; ii++) {

    if (myArray[ii].length > result) {
      result = myArray[ii].length;
    }

  }

  return result;

}

// Use
findLongestWord('The quick brown fox jumped over the lazy dog');