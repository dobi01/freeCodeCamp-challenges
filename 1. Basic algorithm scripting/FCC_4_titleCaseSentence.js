function titleCase(str) {
  var strLowerCase = str.toLowerCase();
  var arrayFromStr = strLowerCase.split(" ");

  var titleCaseArray = arrayFromStr.map(function(ind) {
    var firstLetterUpperCase = ind[0].toUpperCase();
    return ind.replace(ind[0], firstLetterUpperCase);
  });

  return console.log(titleCaseArray.join(" "));
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");