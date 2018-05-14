
var https = require('https');

function getAndPrintHTML(options){
  https.get(options, function(response){
    response.setEncoding('utf8');
    var body = "";
    response.on('data', function(data){
      body += data;
    });
    response.on('end', function(){
      console.log(body);
    });
  });
}


var requestOptions = {
  host: 'syntatris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);

