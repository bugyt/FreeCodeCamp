/**
 * [where]
 * Where art thou :
 * Make a function that looks through an array of objects (first argument) and returns an
 * array of all objects that have matching property and value pairs (second argument).
 * Each property and value pair of the source object has to be present in
 * the object from the collection if it is to be included in the returned array.
 * @param  {Array} collection
 * @param  {Object} source
 * @return {Array}
 */
function where(collection, source) {

  var arr = [];
  var keys = Object.keys(source);
  // Filter array and remove the ones that do not have the keys from source.
  arr = collection.filter(function(obj) {

    // Use the Array method every() instead of a for loop to check for every key from source.
    return keys.every(function(key) {

      // Check if the object has the property and the same value.
      return obj.hasOwnProperty(key) && obj[key] === source[key];

    });

  });

  return arr;

}

// Use
where([{
          first: 'Romeo',
          last: 'Montague',
        }, {
          first: 'Mercutio',
          last: null,
        }, {
          first: 'Tybalt',
          last: 'Capulet',
        },
      ], {
        last: 'Capulet',
      });