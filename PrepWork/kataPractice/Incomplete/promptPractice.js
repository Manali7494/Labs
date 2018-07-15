var prompt = require("prompt-sync")();

// code below (replace this example)
var num = 0;
var answer;
var clicked = false;
while (clicked == false)
{
  answer = prompt("What is your name? ");
  console.log("You answered: " + answer);
  num += 1;
  console.log(parseInt(answer));
  console.log(num);
  if (answer == "yes"){
    clicked = true;}
}

