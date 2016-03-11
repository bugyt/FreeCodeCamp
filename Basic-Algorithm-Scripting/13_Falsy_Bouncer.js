/**
 * [bouncer]
 * Falsy Bouncer :
 * Remove all falsy values from an array.
 * @param  {[Array]} arr
 * @return {[Array]}
 */
function bouncer(arr) {

  var filtered = arr.filter(function(element) {

    return element;

  });

  return filtered;

}

// Use
bouncer([7, 'ate', '', false, 9]);