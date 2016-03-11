/**
 * [friendly]
 * Friendly Date Ranges :
 * Convert a date range consisting of two dates formatted as
 * YYYY-MM-DD into a more readable format.
 * The friendly display should use month names instead of numbers
 * and ordinal dates instead of cardinal (1st instead of 1).
 * @param  {String}
 * @return {Array}
 */
function friendly(str) {

  function getOrdinalFor(intNum, includeNumber) {
    var ordinals = ['', 'st', 'nd', 'rd'];
    var start = includeNumber ? intNum : '';
    intNum = Math.abs(intNum % 100);
    var calc = (intNum - 20) % 10;
    var result = start + (ordinals[calc] || ordinals[intNum] || 'th');

    return result;
  }

  var months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  var resDateB;
  var resDateE;
  var today = new Date();
  // Day : var dd = today.getDate();
  // Month : var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();


  var arrDateB = str[0].split('-');
  var arrDateE = str[1].split('-');

  var yearIntB = parseInt(arrDateB[0]);
  var monthIntB = parseInt(arrDateB[1]);
  var dayIntB = parseInt(arrDateB[2]);
  var dayStrB = getOrdinalFor(dayIntB, true);



  var yearIntE = parseInt(arrDateE[0]);
  var monthIntE = parseInt(arrDateE[1]);
  var dayIntE = parseInt(arrDateE[2]);
  var dayStrE = getOrdinalFor(dayIntE, true);

  if (str[0].localeCompare(str[1]) === 0) {
    resDateB = months[monthIntB - 1] + ' ' + dayStrB + ', ' + yearIntB;
    return [resDateB];
  }

  if (yearIntB === yearIntE && yearIntE === yyyy && monthIntB === monthIntE) {
    resDateB = months[monthIntB - 1] + ' ' + dayStrB;
    resDateE = dayStrE;
  } else if (yearIntB === yearIntE && yearIntE === yyyy || (yearIntB === yyyy && monthIntB >= monthIntE &&
             yearIntB + 1 === yearIntE)) {
    resDateB = months[monthIntB - 1] + ' ' + dayStrB;
    resDateE = months[monthIntE - 1] + ' ' + dayStrE;
  } else if (yearIntB === yearIntE || (monthIntB >= monthIntE && yearIntB + 1 === yearIntE && dayIntE < dayIntB)) {
    resDateB = months[monthIntB - 1] + ' ' + dayStrB + ', ' + yearIntB;
    resDateE = months[monthIntE - 1] + ' ' + dayStrE;
  } else {
    resDateB = months[monthIntB - 1] + ' ' + dayStrB + ', ' + yearIntB;
    resDateE = months[monthIntE - 1] + ' ' + dayStrE + ', ' + yearIntE;
  }

  return [resDateB, resDateE];

}

friendly(['2016-07-01', '2016-07-04']);