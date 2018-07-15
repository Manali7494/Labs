function diceRoller(args){
  var num = args[2]; var str = "";
  if (isNaN(num)) {
    str = "Please put a single a number";
  } else {
    for (i = 0; i < num ; i++){
      var randNum = (Math.floor(Math.random() * 6));
      str = (i === 0) ? randNum : str + ", " + randNum;
    }
  }
  return str;
}
console.log(diceRoller(process.argv));