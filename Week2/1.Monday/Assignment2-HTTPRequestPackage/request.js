var request = require('request');
var fs = require('fs');

var link = 'https://sytantris.github.io/http-examples/future.jpg';
request.get(link)
  .on ('error', function(err){
    console.log(err);
  })
  .on('response', function(response){
    console.log('Response status message:' + response.statusMessage + "\n Content Type: " + response.headers['content-type']);
    console.log('Downloading image...');
  })
  .pipe(fs.createWriteStream('./future.jpg').on('finish', function(){
    console.log('Donwload complete');
  }));

