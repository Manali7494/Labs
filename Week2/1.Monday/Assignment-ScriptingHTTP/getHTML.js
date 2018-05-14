
var https = require('https');

function printHTML(html){
  console.log(html);
}

function getHTML (options, callback){
  https.get(options, function(response){
    response.setEncoding('utf8');
    var body = "";
    response.on('data', function(data){
      body += data;
    });
    response.on('end', function(){
      callback(body);
    });
  });
}

var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);