var fs = require("file-system");

var filePath = "/tmp/test_sync.txt";
var fileData = "Testing synchronous file write. \n";

fs.writeFileSync(filePath, fileData);
console.log("successfully wrote to", filePath);


