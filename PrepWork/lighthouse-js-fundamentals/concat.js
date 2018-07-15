function concat (array1, array2){

  var completeArray = [];

  for (var i = 0; i < array1.length; i++){
    completeArray.push(array1[i]);
  }

  for (var j = 0; j < array2.length; j++){
    completeArray.push(array2[j]);
  }

  return completeArray;
}



console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);