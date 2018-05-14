var https = require("https");

function getAndPrintHTML(){
  var reqOptions = {
    host: 'syntaris.github.io',
    path: '/http-examples/step2.html'
  };
  https.get(reqOptions, function(response){
    response.setEncoding('utf8');
    var body = "";
    response.on('data', function(data){
      body += data;
    });
    response.on('end', function(data){
      console.log(body);
    });
  });
}

getAndPrintHTML();