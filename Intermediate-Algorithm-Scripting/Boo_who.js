/**
 * [boo]
 * Boo who :
 * Check if a value is classified as a boolean primitive. Return true or false.
 * @param  {} bool
 * @return {Boolean}
 */
function boo(bool) {
  return (typeof (bool) === 'boolean');
}

// Use
boo(null);