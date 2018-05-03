// Return true if the string in the first element of the array 
// contains all of the letters of the string in the second element of the array

function mutation(arr) {
  var arg1 = arr[0].toLowerCase(),
      arg2 = arr[1].toLowerCase();

  for (var i = 0; i < arg2.length; i++) {
    
    var letter = arg2.charAt(i);

    if (arg1.indexOf(letter) === -1) {
      return console.log(false);
    }

  }
  return console.log(true);
}

mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
mutation(["floor", "for"]);
mutation(["Alien", "line"]);