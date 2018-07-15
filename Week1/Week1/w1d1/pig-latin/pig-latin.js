function pigLatin(args){
  var array;
  var finalArray = [];
  var resultArray = [];
  for (var i = 2; i < args.length; i++){
    array = args[i];
    resultArray = [];
    for (var j = 1; j < array.length; j++ ){
      resultArray.push(array[j]);
    }
    resultArray.push(args[i][0] + "ay");
    finalArray.push(resultArray.join("") + " ");
  }
  console.log(finalArray.join(""));
}
var args = process.argv;
pigLatin(args);