console.log("Is it a palindrome?\n");

function palindrome(str) {

  strLowerCase = str.toLowerCase();
  strOnlyAlphanumeric  = strLowerCase.replace(/\W|[_]/g, "");
  var arrayFromStr = strOnlyAlphanumeric.split("");
  var reversedArray = arrayFromStr.slice().reverse();

  for (var i = 0; i < arrayFromStr.length; i++) {
    if (arrayFromStr[i] !== reversedArray[i]) {
      return console.log(str + ": " + false); 
    }
  }
  return console.log(str + ": " + true);
}
palindrome("nope");
palindrome("A man, a plan, a canal. Panama");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
