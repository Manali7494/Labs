
var repeatNumbers = function(data){

  var completeString = "";

  for (var i = 0; i < data.length; i++)

  {
    var initialNumString = data[i][0].toString();
    var tempString = initialNumString;

    for (var j = 1; j < data[i][1]; j++)
    {
      tempString += initialNumString;
    }

    if (completeString != "")
    {
    completeString = completeString + ", " + tempString;
    }
    else
    {
      completeString = tempString;
    }
  }

return completeString;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));