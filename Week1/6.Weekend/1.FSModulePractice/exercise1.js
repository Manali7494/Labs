var fs = require('fs');
var fileRead = process.argv[2];



fs.readFile(fileRead,'utf8',function(err,data){
console.log(data);
});

console.log('will execute file async');