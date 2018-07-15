//const _ = require("./node_modules/underscore");

// Procedure:
// 1) npm init --> initalize Package.json
// 2) npm install underscore --save
const _ = require("underscore");
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


function isMostFollowed(data){
var followedObj = {};
/*  for (var num in data){
    data[num]["follows"].forEach(function(fnum,findex){
      if (followedObj[fnum] !== undefined)
      {(followedObj[fnum] += 1)}
      else {(followedObj[fnum] = 1)}
    });*/
var trackingArray = [];
var fnameArray = [];
  for (var num in data){
    data[num]["follows"].forEach(function(fnum,findex){
      (fameArray.indexof(fnum) !== -1) ? trackingArray[findex] += 1 : trackingArray[findex] = 1;
    })
  }
var max = Math.max(trackingArray);
trackingArray.indexOf(max);
fnameArray
  }


  return followedObj;
}
console.log(isMostFollowed(data));

function followsMostPeople(data){
var numArray = [];
var followsReduceArray = [];
  for (var num in data){
    numArray.push(num.name);
    followsReduceArray[num["follows"].length]
  }
  var max = Math.max(followsReduceArray);
  var index = followsReduceArray.indexOf(max);
return numArray[index];
}

