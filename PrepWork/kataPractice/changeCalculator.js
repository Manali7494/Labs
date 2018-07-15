// QUESTION: Why did the loop continue to run forever until I added the i condition
// shouldnt the loop have automatically exited when it saw that changePenny is less 0????
// Approximately 45 minutes??? In reality , like 30 minutes

var calculateChange = function(total, cash)
{
  var changePenny = cash - total;
  var outputObject = {};
  var centsArray = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  var englishArray = ["twentyDollar", "tenDollar", "fiveDollar", "twoDollar", "oneDollar", "quarter", "dime", "nickel", "penny"];
  var i = 0;


  while (changePenny >= 0 && i < centsArray.length)
  {
    if (changePenny - centsArray[i] >= 0)
    {
      changePenny -= centsArray[i];
      if (outputObject[englishArray[i]] > 0)
      {
      outputObject[englishArray[i]] += 1;
      }
      else{outputObject[englishArray[i]] = 1;}
    }
    else if (changePenny-centsArray[i] < 0)
    {
      i++;
    }

  }
  return outputObject;
}


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));