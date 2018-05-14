// LINK: http://www.tutorialspoint.com/nodejs/nodejs_file_system.htm

// OPENING A FILE
/*var fs = require("fs");

// Async - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd){
  if (err){
    return console.error(err);
  }
  console.log("File opened successfully!");
});*/

// ----------------------------------

/*//STATS OF A FILE

var fs = require("fs");

console.log("Going to get file info!");

fs.stat('input.txt', function (err, stats) {
  if (err) {
    return console.error(err);
  }
  console.log(stats);
  console.log("Got file info successfully!");

  // Check file type
  console.log("isFile ? " + stats.isFile());
  console.log("isDirectory ? " + stats.isDirectory());

});*/

/*// WRITING A FILE
var fs = require("fs");
console.log("Goiing to write into existing file");
fs.writeFile('input.txt', "simple Easy Learning", function (err){
  if (err){
    return console.error(err);
  }
  console.log("Data written successfully!");
  console.log("Let's read newly written data");
  fs.readFile("input.txt", function(err, data){
    if (err){
      return console.error(err);
    }
    console.log("Async read: " + data.toString());
  });
});*/

// READING A FILE

var fs = require("fs");
var buf = new Buffer(1024);
console.log("Going to open an existing file!");
fs.open('input.txt', 'r+', function(err, fd){
  console.log("File opened successfully!");
  console.log("Going to read the file!");
  fs.read(fd, bug, 0, buf.length, 0, function(err,bytes){
    if (err){
      console.log(err);
    }
    console.log(bytes + "bytes read");

    // Print only read bytes to avoid junk
    if (bytes > 0){
      console.log(buf.slice(0, bytes).toString());
    }
  });
});