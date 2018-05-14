
function popBottles(dollars){
  var fullBottles = Math.floor(dollars / 2);
  var emptyBottles = 0;
  var caps = 0;
  var array = [];
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
    }
    if (caps / 4 > 0){
      var temp2FB = 0;
      temp2FB = Math.floor(caps / 4);
      fullBottles += temp2FB;
      caps -= (temp2FB * 4);
    }
  }
  var sum = array.reduce(function(sum, value){
    return sum + value;
  });
  console.log(sum);
}

var dollars = process.argv[2];
popBottles(dollars);