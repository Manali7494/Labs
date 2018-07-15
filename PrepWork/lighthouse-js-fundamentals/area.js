function calculateRectangleArea(length,width){
  var rectArea = length * width;
  return checkPositiveArea(rectArea);
}


function calculateTriangleArea(base,height){
  var triArea = (base * height) / 2;
  return checkPositiveArea(triArea);
}

function calculateCircleArea(radius){
  if (radius >= 0){
    var radiusSquare = Math.pow(radius,2);
  }
  var circArea = Math.PI * radiusSquare;
  return checkPositiveArea(circArea);
}

function checkPositiveArea(area){
  if (area > 0){
    return area;
  }
  else { return undefined; }
}


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined