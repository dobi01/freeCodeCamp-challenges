// Remove all falsy values from an array

function bouncer(arr) {
  
  var filteredArr = arr.filter(function(el) {
    if (el) return el;
  });

  return console.log(filteredArr);
}

bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""]);