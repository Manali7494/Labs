function maxProfit(array){

  var firstArray = array;
  var sumArray = [];
  firstArray.forEach(function (element, index){
    for (var i = index; i < firstArray.length; i++){
      if (element < firstArray[i]){
        sum = firstArray[i] - element;
        sumArray.push(sum);
      }
    }
  });
  var maxNum = Math.max.apply(0, sumArray);
  return maxNum;
}

var result = maxProfit([45, 24, 35, 31, 40, 38, 11]);
console.log(result);