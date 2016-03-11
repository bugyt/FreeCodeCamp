/**
 * [translate]
 * Pig Latin :
 * Translate the provided string to pig latin.
 * @param  {String} str
 * @return {String}
 */
function translate(str) {

  function vowelTest(s) {
    return (/^[aeiou]$/i).test(s);
  }

  var ii = 0;

  while (!vowelTest(str[ii])) {
    ii++;
  }

  return str.substr(ii) + str.substr(0, ii) + ((ii > 0) ? 'ay' : 'way');
}

// Use
translate('consonant');