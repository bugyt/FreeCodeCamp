/**
 * [myReplace]
 * Search and Replace :
 * Perform a search and replace on the sentence using the arguments provided and return
 * the new sentence.
 * @param  {String} str
 * @param  {String} before
 * @param  {String} after
 * @return {String}
 */
function myReplace(str, before, after) {

  return str.replace(before, function() {

    return (before[0] === before[0].toUpperCase()) ? after[0].toUpperCase() + after.substr(1) :
      after;

  });
}

// Use
myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');