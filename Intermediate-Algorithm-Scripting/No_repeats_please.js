/**
 * [permAlone]
 * No repeats please :
 * Return the number of total permutations of the provided string
 * that don't have repeated consecutive letters. Assume that duplicate characters are each unique.
 * @param  {String} str
 * @return {Integer}
 */
function permAlone(str) {

  var permArr = [];
  var usedChars = [];

  function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length === 0) {
        permArr.push(usedChars.slice());
      }
      permute(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  }

  var r = /(.)\1/;
  return permute(str.split(''))
    .map(function(val) {
      return val.join('');
    })
    .filter(function(val) {
      return !r.test(val);
    })
    .length;

}

permAlone('aab');