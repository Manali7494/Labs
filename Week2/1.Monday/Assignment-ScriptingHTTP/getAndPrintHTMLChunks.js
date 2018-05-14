
var https = require('https');

function getAndPrintHTMLChunks (){
  var reqOptions = {
    host: 'syntaris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(reqOptions, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
      console.log(data + "\n");
    });
    response.on('end', function(data){
      console.log('\n Response Stream Completed \n');
    });
  });
}
getAndPrintHTMLChunks();