
function generateBoard(queen1,queen2)
{
  var queen1i = queen1[1];
  var queen1j = queen1[0];
  var queen2i = queen2[1];
  var queen2j = queen2[0];
  var boardArray = [];

  for (var i = 0; i < 8; i++)
  {
    var placeArray = [];
    for (var j = 0; j < 8; j++)
    {
      if (i == queen1i && j == queen1j)
      {
        placeArray.push(1);
      }
      else if (i == queen2i && j == queen2j)
      {
        placeArray.push(1);
      }
      else
      {
        placeArray.push(0);
      }
    }
    boardArray.push(placeArray);
  }
  return boardArray;
}


function queenThreat(board)
{
  // Finding the Queen Arrays from the board
  var queenArray = [];
  for (var i = 0; i < 8; i++)
  {
    for (var j = 0; j < 8; j++)
    {
      if (board[i][j] == 1)
      {
        queenArray.push(i,j);
      }
    }
  }
  var queen1i = queenArray[1];
  var queen1j = queenArray[0];
  var queen2i = queenArray[3];
  var queen2j = queenArray[2];

  // Creating while loops to go into threatArray
  var threatArray = [];
  var endReached = false;
  var tempi = queen2i
  var tempj = queen2j;

  // Top Right Diagonal
  while (endReached == false)
  {
    var tempArray = [];
    if (tempi == -1 || tempj == 8)
    {
      endReached = true;
    }
    else
    {
      tempArray.push(tempi,tempj);
      tempi--;
      tempj++;
      threatArray.push(tempArray);
    }
  }

  // Top left diagonal
  tempi = queen2i;
  tempj = queen2j;
  endReached = false;
  while (endReached == false)
  {
    tempArray = [];
    if (tempi == -1 || tempj == -1)
    {
      endReached = true;
    }
    else
    {
      tempArray.push(tempi,tempj);
      tempi--;
      tempj--;
      threatArray.push(tempArray);
    }
  }

  // Bottom Right diagonal
  tempi = queen2i;
  tempj = queen2j;
  endReached = false;
  while (endReached == false)
  {
    tempArray = [];
    if (tempi == 8 || tempj == 8)
    {
      endReached = true;
    }
    else
    {
      tempArray.push(tempi,tempj);
      tempi++;
      tempj++;
      threatArray.push(tempArray);
    }
  }

  // Bottom Left diagonal
  tempi = queen2i
  tempj = queen2j
  endReached = false;
  while (endReached == false)
  {
    tempArray = [];
    if (tempi == 8 || tempj == -1)
    {
      endReached = true;
    }
    else
    {
      tempArray.push(tempi,tempj);
      tempi++;
      tempj--;
      threatArray.push(tempArray);
    }
  }


  // Row and Column addition to threat array
  tempi = queen2i;
  for (var j = 0; j < 8; j++)
  {
    tempArray=[];
    if (j != queen2j)
    {
      tempArray.push(tempi,j);
      threatArray.push(tempArray);
    }
  }

  tempj = queen2j;
  for (var i = 0; i < 8; i++)
  {
    tempArray=[];
    if (i != queen2i)
    {
      tempArray.push(i,tempj);
      threatArray.push(tempArray);
    }

  }
  // Loop through threatArray and confirm presence of the other queen
  var consti = queen1i;
  var constj = queen1j;
  var threat = false;
  for (var t = 0; t < threatArray.length; t++)
  {
    var arrayi = threatArray[t][0];
    var arrayj = threatArray[t][1];
    if (arrayi == consti && arrayj == constj)
    {
      threat = true;
    }
  }
  return threat;
}

var whiteQueen = [0, 5];
var blackQueen = [5, 0];
var generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

var whiteQueen = [0, 0];
var blackQueen = [7, 5];
var generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));