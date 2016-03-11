/**
 * [telephoneCheck]
 * Validate US Telephone Numbers :
 * Return true if the passed string is a valid US phone number.
 * Valid formats : 555-555-5555, (555)555-5555, (555) 555-5555, 555 555 5555
 * 5555555555, 1 555 555 5555
 * @param  {String} str
 * @return {Booean}
 */
function telephoneCheck(str) {

  function checkBrackets(str) {
    var s;
    str = str.replace(/[^{}[\]()]/g, '');
    while (s !== str) {
      s = str;
      str = str.replace(/{}|\[]|\(\)/g, '');
    }
    return !str;

  }

  var regex1 = /^1?\s?\(?([2-9]..)\)?[\-\s]?([2-9]..)[\-\s]?(....)$/;

  if (regex1.test(str) && checkBrackets(str)) {
    return true;
  }

  return false;

}

telephoneCheck('555-555-5555');