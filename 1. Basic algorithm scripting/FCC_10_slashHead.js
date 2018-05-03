function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return console.log(arr);
}

slasher([1, 2, 3], 2);
slasher(["burgers", "fries", "shake"], 1);