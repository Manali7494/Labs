
function numberGuess()
{
  var prompt = require("prompt-sync")();
  var randomNumber = Math.round((Math.random()*100));
  var userGuess,counter = 1;
  var guessedArray = [];
  var reply;

  while (userGuess != randomNumber)
  {
    userGuess = parseInt(prompt("Guess a number:"));
    if (guessedArray.indexOf(userGuess) > -1)
    {
      reply = "You already guessed it!"
    }
    else if (userGuess > randomNumber)
    {
      reply = "Too High!"
      guessedArray.push(userGuess);
      counter += 1;
    }
    else if (userGuess < randomNumber)
    {
      reply = "Too Low!"
      guessedArray.push(userGuess);
      counter += 1;
    }
    else if (userGuess == randomNumber)
    {
      reply = "You got it! You took " + counter + " attempts!"
    }
    else
    {
      reply = "Not a number! Try again!"
    }
    console.log(reply);
  }
}

numberGuess();