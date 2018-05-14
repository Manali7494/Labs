function maxProfit(array){

  var firstArray = array;
  console.log(firstArray);
  var sumArray = [];
  firstArray.forEach(function (element, index){
    for (var i = index; i < firstArray.length; i++){
      if (element < firstArray[i]){
        sum = firstArray[i] - element;
        sumArray.push(sum);
      }
    }
  });
  console.log(sumArray);
  var maxNum = Math.max.apply(0, sumArray);
  return maxNum;
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));