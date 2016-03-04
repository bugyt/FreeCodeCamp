/**
 * [rot13]
 * Caesars Cipher :
 * Takes a ROT13 encoded string as input and returns a decoded string.
 * @param  {[String]} str
 * @return {[String]}
 */
function rot13(str) { // LBH QVQ VG!

  str = str.replace(/[a-zA-Z]/g,function(c) {

    return String.fromCharCode((c <= 'Z'?90:122) >= (c = c.charCodeAt(0) + 13)?c:c - 26);

  });

  return str;

}

// Use
rot13('Gb trg gb gur bgure fvqr!');