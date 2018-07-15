// 30 minutes

var camelCase = function(input)
{
  var stringArray = input.split(" ");
  var completeString;

  for (var i = 0; i < stringArray.length; i++)
  {
    if (i == 0)
    {
      completeString = stringArray[i];
    }

    else if (i > 0)
    {
      var character = stringArray[i].charAt(0).toUpperCase();
      var substring = stringArray[i].substring(1,stringArray[i].length);
      var completeString = completeString + character + substring;
    }

  }
  return completeString;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
