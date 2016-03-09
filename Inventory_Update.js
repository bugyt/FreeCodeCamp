/**
 * [inventory]
 * Inventory Update :
 * Compare and update inventory stored in an array against a second array of a fresh delivery.
 * Update current inventory item quantity, and if an item cannot be found,
 * add the new item and quantity into the inventory array in alphabetical order.
 * @param  {Array} arr1
 * @param  {Array} arr2
 * @return {Array}
 */
function inventory(arr1, arr2) {

  // All inventory must be accounted for or you're fired!

  var hash = {};

  function Comparator(currItem, nextItem) {
    return (currItem[1] > nextItem[1]) ? 1 : -1;
  }

  arr1 = arr1.concat(arr2).sort(Comparator).map(function(val) {
    hash[val[1]] = (hash[val[1]] === undefined) ? val[0] : hash[val[1]] + val[0];
  });

  arr1 = [];
  for (var key in hash) {
    arr1.push([hash[key], key]);
  }

  return arr1;
}

// Example inventory lists
var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

inventory(curInv, newInv);