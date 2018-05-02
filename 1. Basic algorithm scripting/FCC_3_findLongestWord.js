// Return the length of the longest word in the provided sentence
function findLongestWord(str) {

  var arrayFromStr = str.split(" ");
  
  arrayFromStr.sort(function(a, b) {
    return b.length - a.length;
  });

  return console.log(arrayFromStr[0].length);
}

findLongestWord("The quick brown fox jumped over the lazy dog");