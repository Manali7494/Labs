function obfuscate(word){
  var letterArray = ["a", "e", "o", "l"];
  var replaceArray = ["4", "3", "0", "1"];
  var changeWord = word;
  for (var i = 0; i < letterArray.length; i++){
    var reg = new RegExp(letterArray[i], "g");
    changeWord = changeWord.replace(reg, replaceArray[i]);
  }
  console.log(changeWord);
}
var args = process.argv;
var word = args[2];
obfuscate(word);