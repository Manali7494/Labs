
function popBottles(dollars){
  var fullBottles = Math.floor(dollars / 2);
  var emptyBottles = 0;
  var caps = 0;
  var array = [];
  var obtainedBottles = 0;
  var obtainedCaps = 0;
  while (fullBottles > 0){
    array.push(fullBottles);
    if (fullBottles > 0){
      emptyBottles += fullBottles;
      caps += fullBottles;
      fullBottles -= fullBottles;
    }
    if (emptyBottles / 2 > 0){
      var tempFB = 0;
      tempFB += Math.floor(emptyBottles / 2);
      fullBottles += tempFB;
      emptyBottles -= tempFB * 2;
      obtainedBottles += tempFB;
    }
    if (caps / 4 > 0){
      var temp2FB = 0;
      temp2FB = Math.floor(caps / 4);
      fullBottles += temp2FB;
      caps -= (temp2FB * 4);
      obtainedCaps += temp2FB;
    }
  }
  var sum = array.reduce(function(sum, value){
    return sum + value;
  });

  var string = "TOTAL BOTTLES: " + sum + "\n" + "REMAINING BOTTLES: " + emptyBottles + "\n REMAINING CAPS: " + caps + "\n TOTAL EARNED: \n BOTTLES: " + obtainedBottles + "\n CAPS: " + obtainedCaps;
  console.log(string);
}

var dollars = process.argv[2];
popBottles(dollars);