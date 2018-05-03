function chunkArrayInGroups(arr, size) {
  var chunkedArr = [];

  for (var i = 0; i < arr.length / size; i++) {
    var innerArr = arr.slice(size * i, size * (i + 1));
    chunkedArr.push(innerArr);
  }
  return console.log(chunkedArr);;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
