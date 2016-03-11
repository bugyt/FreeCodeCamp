function friendly(str) {

  var months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();


  var arrDateB = str[0].split('-');
  var arrDateE = str[1].split('-');

  var yearIntB = parseInt(arrDateB[0]);
  var monthIntB = parseInt(arrDateB[1]);
  var dayIntB = parseInt(arrDateB[2]);

  var yearIntE = parseInt(arrDateE[0]);
  var monthIntE = parseInt(arrDateE[1]);
  var dayIntE = parseInt(arrDateE[2]);

  console.log(today + ' - ' + dd + ' - ' + mm + ' - ' + yyyy);
  console.log('-------------');
  console.log(yearIntB + ' / ' + months[monthIntB - 1] + ' / ' + dayIntB);
  console.log(yearIntE + ' / ' + months[monthIntE - 1] + ' / ' + dayIntE);


}

friendly(['2016-07-01', '2016-07-04']);