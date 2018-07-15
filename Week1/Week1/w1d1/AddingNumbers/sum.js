var args = process.argv;

var sum = Number(args[2]) + Number(args[3]);

console.log(sum);



/*// Logic:
Adding Numbers

//
How to refractor it:

function addNumbers(args){

  if (args.length !== 4){
    return "You didn't put the right number of numbers"
  }
  else{
    var num1 = Number(args[2]);
    var num2 = Number(args[3]);
    if (isNan(num1) || isNan(num2){
    console.log('Your number's aren't numbers');
    } else {
    return num1+ num2; }
  }
}
console.log(addNumbers(process.argv));*/