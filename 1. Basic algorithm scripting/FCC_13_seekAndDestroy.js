// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {

  for (i = 1; i < arguments.length; i++) {
    var arg = arguments[i];

    arr = arr.filter(function(el) {
      if (el !== arg) return el;
    });

  }
  return console.log(arr);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);