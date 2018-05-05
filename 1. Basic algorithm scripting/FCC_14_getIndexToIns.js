// Return the lowest index at which a value (second argument) 
// should be inserted into an array (first argument) 
// once it has been sorted

function getIndexToIns(arr, num) {
  
  arr.push(num);

  arr.sort(function(a, b) {
    return a - b;
  });

  var index = arr.findIndex(function(el) {
    return el === num;
  });

  return  console.log(index);
}

getIndexToIns([70, 30], 50);
getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([5, 3, 20, 3], 5);