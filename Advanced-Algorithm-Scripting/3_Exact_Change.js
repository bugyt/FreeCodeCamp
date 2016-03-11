/**
 * [drawer]
 * Exact Change :
 * ash register drawer function that accepts purchase price as the first argument,
 * payment as the second argument, and cash-in-drawer (cid) as the third argument.
 * Return the string "Insufficient Funds" if cash-in-drawer is less than the change due.
 * Return the string "Closed" if cash-in-drawer is equal to the change due.
 * Otherwise, return change in coin and bills, sorted in highest to lowest order.
 * @param  {Decimal} price
 * @param  {Decimal} cash
 * @param  {Array} cid
 * @return {Array or String}
 */
function drawer(price, cash, cid) {

  // Here is your change, ma'am.

  var change = [];
  var due = cash - price;
  var curr = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
  var cashin = 0;

  cid.map(function(val) {
    cashin += val[1];
  });

  if (cashin < due) {
    return 'Insufficient Funds';
  }
  if (cashin === due) {
    return 'Closed';
  }

  cid.reverse().map(function(val, index) {

    var type = val[0];
    var money = val[1];
    var calc = 0;
    var value = curr[index];

    if (due > 0) {

      while (due >= value && money >= value) {

        calc += value;
        due = (due - value).toFixed(2);
        money -= value;

      }

      if (calc > 0) {
        change.push([type, calc]);
      }

    }

  });

  if (due > 0) {
    return 'Insufficient Funds';
  }

  return change;
}

// Example cash-in-drawer array:
// [['PENNY', 1.01],
// ['NICKEL', 2.05],
// ['DIME', 3.10],
// ['QUARTER', 4.25],
// ['ONE', 90.00],
// ['FIVE', 55.00],
// ['TEN', 20.00],
// ['TWENTY', 60.00],
// ['ONE HUNDRED', 100.00]]

drawer(19.50, 20.00, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.10],
  ['QUARTER', 4.25],
  ['ONE', 90.00],
  ['FIVE', 55.00],
  ['TEN', 20.00],
  ['TWENTY', 60.00],
  ['ONE HUNDRED', 100.00],
]);