function truncateString(str, num) {

  if (str.length <= num) {
    return console.log(str);
  }

  var strSliced = str.slice(0, num);

  if (str.length >= num && num <= 3) {
    return console.log(strSliced + "...");
  }

  var arrayFromStr = strSliced.split(" ");
  arrayFromStr.pop();

  var strWholeWords = arrayFromStr.join(" ");

  return console.log(strWholeWords + "...");
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("A-", 1);
truncateString("Absolutely Longer", 2);