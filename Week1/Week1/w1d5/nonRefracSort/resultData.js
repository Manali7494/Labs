var takeData = require("./takeData.js")
var sortData = require("./sortData.js")

takeData(4);
takeData(6);
takeData(7);
takeData(2);
var unsortedList = takeData(9);

var sortedList = sortData(unsortedList);
console.log(sortedList);
