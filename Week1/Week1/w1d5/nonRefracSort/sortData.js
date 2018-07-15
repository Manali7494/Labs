var takeData = require ("./takeData");

var sortData = function(takeData){
  takeData.sort(function(a,b){
    return a-b;
  })
  return takeData;
}
module.exports = sortData;
