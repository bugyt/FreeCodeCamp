/**
 * [convert]
 * Convert HTML Entities :
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe),
 * in a string to their corresponding HTML entities.
 * @param  {String} str
 * @return {String}
 */
function convert(str) {
  // &colon;&rpar;
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(
    /"/g, '&quot;').replace(/'/g, '&apos;');
}

convert('Dolce & Gabbana');