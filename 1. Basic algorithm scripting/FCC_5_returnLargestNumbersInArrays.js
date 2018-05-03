function largestOfFour(arr) {
  var arrayOfLargest = [];
  
  for (var i = 0; i < arr.length; i++) {

    arr[i].sort(function(a, b) {
      return b - a;
    });

    var firstInArray = arr[i][0];
    arrayOfLargest.push(firstInArray);
  }

  return console.log(arrayOfLargest);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);