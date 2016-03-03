////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Roman Numeral Converter :
// Convert the given number into a roman numeral.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function convertF(digit,sup,val,inf){
  var res="X";
  var obj= {
              "M" : 1,
              "D" : 5,
              "C" : 1,
              "L" : 5,
              "X" : 1,
              "V" : 5,
              "I" : 1    
  };
//    [["M",1000],["D",500],["C",100],["L",50],["X",10],["V",5],["I",1]];
  switch(digit){
      case 0 :
        res = "";
        break;
      case 1 :
      case 2 :
      case 3 :
        res = inf.repeat(digit);
        break;
      case 4 :
        res = inf + val;
        break;
      case 5 :
        res = val;
        break;
      case 6 :
      case 7 :
      case 8 :
        res = val + inf.repeat(digit - obj[val]);
        break;
      case 9 :
        res = inf + sup;
        break;
      
  }
  return res;
}

function treatment(val, index){
  var digit = parseInt(val);
  var res = "";
    switch(index) {
      case 3 :
       res = "M".repeat(digit);
        break;
      case 2 :
         res = convertF(digit, "M", "D", "C");
          break;
      case 1 :
         res = convertF(digit, "C", "L", "X");
          break;
      case 0 :
          res = convertF(digit, "X", "V", "I");
          break;
      default:  
          res = "";
          break;
    }
  return res;
}

function convert(num) {
  
  var split = num.toString().split('').reverse().map(treatment).reverse().join('');
  
  return split;
}
// Use
convert(891);
