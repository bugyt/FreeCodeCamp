/**
 * [every]
 * Everything Be True :
 * Check if the predicate (second argument) is truthy on all elements
 * of a collection (first argument).
 * @param  {Array} collection
 * @param  {String} pre
 * @return {Boolean}
 */
function every(collection, pre) {
  // Is everyone being true?
  var truthy = true;

  collection.map(function(val) {

    if (!val[pre]) {
      truthy = false;
    }

  });

  return truthy;
}

every([{
  user: 'Tinky-Winky',
  sex: 'male',
}, {
  user: 'Dipsy',
  sex: 'male',
}, {
  user: 'Laa-Laa',
  sex: 'female',
}, {
  user: 'Po',
  sex: 'female',
}, ], 'sex');