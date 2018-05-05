// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

function rot13(str) {
  var decodedStr = '';

  for (i = 0; i < str.length; i++ ) {
    var newChar,
        oldChar = str.charCodeAt(i),
        A = 65,
        Z = 90,
        rotation = 13;

    if (oldChar < A || oldChar > Z) {
      newChar = String.fromCharCode(oldChar);
 
    } else if (oldChar >= A + rotation) {
      newChar = String.fromCharCode(oldChar - rotation);

    } else {
      var distanceToA = oldChar - A;
      newChar = String.fromCharCode(Z + 1 - rotation + distanceToA);
    }

    decodedStr += newChar;
  }
  return console.log(decodedStr);
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
rot13("LBH QVQ VG!");