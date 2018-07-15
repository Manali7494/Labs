var args = process.argv;
var word = args[2];
obfuscate(word);

function obfuscate(word)
{
  var array = word.split("");
  array.forEach(function(element, index){
    switch (element) {
      case "a":
      array[index] = "4";
       break;
       case "e":
       array[index] = "3";
       break;
       case "o":
       array[index] = "0";
       break;
       case "l":
       array[index] = "1";
       break;
    }
  });
  console.log(array.join(""));
}
