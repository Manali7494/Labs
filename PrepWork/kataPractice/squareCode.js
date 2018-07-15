function squareCode(sentence)
{
  var sentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  var length = sentence.length;
  var resultArray = [];
  var spaceCheck = sentence.split(" ");

  if (spaceCheck.length > 1)
  {
    resultArray = ["Please","enter","a","sentence","without","any","space"];
  }
  else if (sentence.length > 81)
  {
    resultArray = ["Please","enter","a","sentence","less","than","81","characters"];
  }
  else
  {
    var row = Math.ceil(Math.sqrt(length));
    var column = Math.ceil(length / row);
    var fwdArray = [];
    var sliceIndex = 0;
    var rowIndex = 0;

    for (var i = 1; i <= column; i++)
    {
      fwdArray.push(sentence.slice(sliceIndex, sliceIndex + row));
      sliceIndex += row;
    }

    for (var rowIndex = 0; rowIndex < row; rowIndex++ )
    {
      var tempArray = [];
      for (var i = 0; i < column; i++)
      {
        tempArray.push(fwdArray[i][rowIndex]);
      }
    resultArray.push(tempArray.join(""));
    }
  }
  return resultArray.join(" ");
}

console.log(squareCode("Ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots"));
console.log(squareCode("haveaniceday"));
console.log(squareCode("feedthedog"));
console.log(squareCode("chillout"));