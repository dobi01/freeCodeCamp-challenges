console.log("Does the string end with the given target string?");

function confirmEnding(str, target) {

  var ending = str.substr(-target.length);

  if (target !== ending) {
    return console.log(false);;
  }

  return console.log(true);;
}

confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "name");
confirmEnding("Open sesame", "pen");
