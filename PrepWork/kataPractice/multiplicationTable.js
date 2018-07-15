function multiplicationTable (maxValue)
{

  var maxMultiple = maxValue * maxValue;
  var lineSelected = findLineOptions(maxMultiple);
  var multipleTable = [];
  var spacingArray;

    for (var i = 1; i <= maxValue; i++)
    {
      var lineRow = [];
      var numberLine = [];

      for (var j = 1; j <= maxValue; j++)
      {
        if (j == 1)
        {
          lineRow.push(lineSelected[0], lineSelected[1]);
          spacingArray = spacingSelection(i, j, maxMultiple);
          numberLine.push(spacingArray[0], (i*j), spacingArray[1]);
        }

        else if (j > 1)
        {
          lineRow.push(lineSelected[1]);
          spacingArray = spacingSelection(i, j, maxMultiple);
          numberLine.push((i*j), spacingArray[1]);
        }
      }

      multipleTable.push("\n" + lineRow.join(""), "\n", numberLine.join(""));
    }

    multipleTable.push("\n", lineRow.join(""));
    var table = multipleTable.join("");

  return table;
}

// Function to select length of multiplication table line at the top and bottom of each number
function findLineOptions(maxMultiple)
{
  var lineOptions = ["+"];
  var value = maxMultiple;
  var line = "---";

  while (value >= 10)
  {
    line += "-";
    value = value / 10;
  }

  line += "+";
  lineOptions.push(line);

  return lineOptions;
}

// Function to select spacing for individual numbers in the table
function spacingSelection(i,j,maxMultiple)
{
  var lineSpacing = ["| "];
  var number = maxMultiple;
  var space = "";
  var spaceArray = [];

  while (number >= 1)
  {
    space += " ";
    spaceArray.push(space);
    number = number / 10;
  }

  var divideCounter = 0;
  var ij= i * j;
  while (ij >= 1)
  {
    ij = ij / 10;
    divideCounter += 1;
  }

  var emptySpacing = spaceArray[spaceArray.length - divideCounter];
  lineSpacing.push(emptySpacing + "| ");

  return lineSpacing;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
