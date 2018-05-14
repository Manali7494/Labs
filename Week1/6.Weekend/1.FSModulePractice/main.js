var fs = require("fs");

// Async read

fs.readFile('input.txt', function(err, data){
  if (err){
    return console.error(err);
  }
  console.log("Asyncronous read: " + data.toString());
});


// Sync read
var data = fs.readFileSync('input.txt');
console.log("sync read: " + data.toString());

console.log("Program Ended");