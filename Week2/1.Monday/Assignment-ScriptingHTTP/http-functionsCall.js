var httpfunction = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

httpfunction(requestOptions, function(body){
  console.log(body);
});

