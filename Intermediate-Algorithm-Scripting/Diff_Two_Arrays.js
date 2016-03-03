////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Diff Two Arrays :
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other 
// words, return the symmetric difference of the two arrays.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function existInOtherArray(value, arr) {
  return arr.indexOf(value) < 0;
}

function diff(arr1, arr2) {
  var newArr = [];
  
  var filtered = arr1.filter(function(value){
    return existInOtherArray(value, arr2);
  });
  
  var filtered2 = arr2.filter(function(value){
    return existInOtherArray(value, arr1);
  });
  
  newArr = filtered.concat(filtered2);
  
  return newArr;
}
// Use
diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
