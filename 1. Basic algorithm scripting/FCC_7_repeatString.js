function repeatStringNumTimes(str, num) {
  
  if (num <= 0) {
    return "";
  }
  
  var strCopy = str;

  for (var i = 1; i < num; i++) {
    strCopy = strCopy.concat(str);
  }

  return console.log(strCopy);
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", -2);