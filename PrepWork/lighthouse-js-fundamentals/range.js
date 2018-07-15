function range (start, end, step){

  var array = [];

  if ( start === undefined || end === undefined || step === undefined )
  {
    return array;
  }

  else if (start > end)
  {
    return array;
  }

  else if (step < 0)
  {
    return array;
  }


  var i = start;

  while (i <= end)
  {
    array.push(i);
    i += step;
  }
  return array;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));