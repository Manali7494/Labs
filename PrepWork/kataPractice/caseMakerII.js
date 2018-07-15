
var makeCase = function (string,reqCase)
{
  var precedenceArray = ["camel", "pascal", "snake", "kebab", "title", "vowel", "consonant", "upper", "lower"];
  var sortArray = [];
  if (Array.isArray(reqCase) == true)
  {
    reqCase.forEach(function(element)
    {
      if (precedenceArray.indexOf(element) > -1 )
      {
        sortArray.push(precedenceArray.indexOf(element));
      }
    });

    sortArray.sort();
  }
  else
  {
    sortArray.push(precedenceArray.indexOf(reqCase));
  }
  var stringArray = string.split(" ");
  for (var i = 0; i < sortArray.length; i++)
  {
    switch (sortArray[i])
    {
      case 0:
      stringArray = camel(stringArray);
      break;

      case 1:
      stringArray = pascal(stringArray);
      break;

      case 2:
      stringArray = snake(stringArray);
      break;

      case 3:
      stringArray = kebab(stringArray);
      break;

      case 4:
      stringArray = title(stringArray);
      break;

      case 5:
      stringArray = vowel(stringArray);
      break;

      case 6:
      stringArray = consonant(stringArray);
      break;

      case 7:
      stringArray = upper(stringArray);
      break;

      case 8:
      stringArray = lower(stringArray);
      break;
    }
  }
  return stringArray[0];
}

function camel(stringArray)
{
  var letter,upperLetter;
  var resultArray = [];
  for (var i = 1; i < stringArray.length; i++)
  {
      letter = stringArray[i].charAt(0);
      upperLetter = letter.toUpperCase();
      stringArray[i] = stringArray[i].replace(letter,upperLetter);
  }
  stringArray = stringArray.join("");
  resultArray.push(stringArray);
  return resultArray;
}


function pascal (stringArray)
{
  var letter,upperLetter;
  var resultArray = [];
  for (var i = 0; i < stringArray.length; i++)
  {
      letter = stringArray[i].charAt(0);
      upperLetter = letter.toUpperCase();
      stringArray[i] = stringArray[i].replace(letter,upperLetter);
    }
  stringArray = stringArray.join("");
  resultArray.push(stringArray);
  return resultArray;
}

function snake (stringArray)
{
  var resultArray = [];
  resultArray.push(stringArray.join("_"));
  return resultArray;
}


function kebab (stringArray)
{
  var resultArray = [];
  resultArray.push(stringArray.join("-"));
  return resultArray;
}

function title (stringArray)
{
  var letter,upperLetter;
  var resultArray = [];
  for (var i = 0; i < stringArray.length; i++)
  {
    letter = stringArray[i].charAt(0);
    upperLetter = letter.toUpperCase();
    stringArray[i] = stringArray[i].replace(letter,upperLetter);
  }
  stringArray = stringArray.join(" ");
  resultArray.push(stringArray);
  return resultArray;
}

function vowel(stringArray)
{
  var vowelArray = [];
  var resultArray=[];
  for (var i = 0; i < stringArray.length ; i++)
  {
    stringArray[i] = stringArray[i].split("");
  }
  stringArray.forEach(function(element)
  {
    for (var j = 0; j < element.length; j++)
    {
      if (element[j] == "a" || element[j] == "A" || element[j] == "e" || element[j] == "E" || element[j] == "i" || element[j] =="I" || element[j] =="o" || element[j] == "O" || element[j] == "u" || element[j] == "U")
      {
        element[j] = element[j].toUpperCase();
      }
      vowelArray.push(element[j]);
    }
      vowelArray.push(" ");
  });
  vowelArray.pop();
  resultArray.push(vowelArray.join(""));
  return resultArray
}


function consonant (stringArray)
{
  var consonantArray = [];
  var resultArray=[];
  for (var i = 0; i < stringArray.length ; i++)
  {
    stringArray[i] = stringArray[i].split("");
  }
  stringArray.forEach(function(element)
  {
    for (var j = 0; j < element.length; j++)
    {
      if (element[j] != "a" && element[j] != "A" && element[j] != "e" && element[j] != "E" && element[j] != "i" && element[j] !="I" && element[j] !="o" && element[j] != "O" && element[j] != "u" && element[j] != "U")
      {
        element[j] = element[j].toUpperCase();
      }
      consonantArray.push(element[j]);
    }
      consonantArray.push(" ");
  });
  consonantArray.pop();
  resultArray.push(consonantArray.join(""))
  return resultArray
}


function upper(stringArray)
{
  var upperArray = [];
  var resultArray = [];
  stringArray.forEach(function(element)
  {
      upperArray.push(element.toUpperCase());
  });
  resultArray.push(upperArray.join(" "));
  return resultArray;
}

function lower(stringArray)
{
  var resultArray = [];
  var lowerArray=[];
  stringArray.forEach(function(element)
  {
    lowerArray.push(element.toLowerCase());
   });
  resultArray.push(lowerArray.join(" "))
  return resultArray;
}

console.log(makeCase("this is a string", "camel") === "thisIsAString");
console.log(makeCase("this is a string", "pascal") === "ThisIsAString");
console.log(makeCase("this is a string", "snake") === "this_is_a_string");
console.log(makeCase("this is a string", "kebab") === "this-is-a-string");
console.log(makeCase("this is a string", "title") === "This Is A String");
console.log(makeCase("this is a string", "vowel") === "thIs Is A strIng");
console.log(makeCase("this is a string", "consonant") === "THiS iS a STRiNG");
console.log(makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING");
