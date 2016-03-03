/**
 * [end]
 * Confirm the Ending :
 * Check if a string (first argument) ends with the given
 * target string (second argument).
 * @param  {[String]} str
 * @param  {[String]} target
 * @return {[Boolean]}
 */
function end(str, target) {
  if (str.substr(str.length - target.length, target.length) === target) {
    return true;
  }
  return false;
}

// Use
end('Bastian', 'n');