function calculateMostFollows(data){
  var maxNumber = 0;
  var nameOfMostFollows = "";
  for (var dataX in data){
    if (data[dataX].follows.length > maxNumber){
      maxNumber = data[dataX].follows.length;
      nameOfMostFollows = data[dataX].name;
    }
  }
  return (nameOfMostFollows + " follows " + maxNumber + " people");
}

function calculateMostFollowsAbove30(data){
  var maxNumber = 0;
  var nameOfMostFollows = "";
  for (var dataX in data){
    if (data[dataX].follows.length > maxNumber && data[dataX].age > 30){
      maxNumber = data[dataX].follows.length;
      nameOfMostFollows = data[dataX].name;
    }
  }
  return (nameOfMostFollows + " follows " + maxNumber + " people");
}

function calculateMostFollowers(data){
  var resultObject = {};

  for (var item in data){
    for (followNum of data[item].follows) {
      if (resultObject[followNum] === undefined){
        resultObject[followNum] = 1;
      } else{
        resultObject[followNum] += 1;
      }
    }
  }

  var maxNum = 0;
  var maxNameArray = [];
  var maxName = ""
  for (var maxFollow in resultObject){
    if (resultObject[maxFollow] > maxNum){
      maxName = data[maxFollow].name
      maxNum = resultObject[maxFollow];
    }
    else if (resultObject[maxFollow] === maxNum){
        maxNameArray.push(data[maxFollow].name)
    }
  }

  return (maxNameArray || maxName );
}


function listOfFollowsAndFollower(data){

var returnObject = {};

for (var element in data){
  var tempArray = [];
  for (var follow of data[element].follows){
    tempArray.push(data[follow].name)
  }
var followedByArray = [];
  for (var element2 in data){
    for (var follows2 of data[element2].follows){
      if (element === follows2 && element2 !== element){
        followedByArray.push(data[element2].name)
      }
    }

  }

  returnObject[data[element].name] = {
    followedBy : followedByArray,
    follows: tempArray
  }

}
return returnObject
}



var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

calculateMostFollows(data);
calculateMostFollowers(data);
listOfFollowsAndFollower(data);
calculateMostFollowsAbove30(data);