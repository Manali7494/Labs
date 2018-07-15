
function reverseString(args){
  var array;
  var resultArray = [];
  for (var i = 2; i < args.length; i++){

    array = args[i];
    resultArray = [];
    for (var j = (array.length - 1); j >= 0; j--){
      resultArray.push(array[j]);
    }
    console.log(resultArray.join(""));
  }
}
var args = process.argv;
reverseString(args);
