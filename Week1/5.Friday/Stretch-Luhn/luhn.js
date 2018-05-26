
function check (array){
  var newArray = [];
  var validity;
  array.forEach(function(number, index){
    if (index % 2 !== 0){
      var double = number * 2;
      if (double > 9){
        var string = double.toString();
        var tempSum = 0;
        for ( i = 0; i < string.length; i++){
          tempSum += Number(string[i]);
        }
        newArray.push(tempSum);
      } else {
        newArray.push(double);
      }
    } else {
      newArray.push(number);
    }
  });
  var totalSum = newArray.reduce(function(sum, value){
    return sum + value;
  });

  totalSum % 10 === 0 ? validity = true : validity = false;
  return validity;
}

module.exports = check;