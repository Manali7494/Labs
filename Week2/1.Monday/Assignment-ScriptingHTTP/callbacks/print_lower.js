var getHTML = require('./http-functions');

var requestOptions = {
  host: 'syntatris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLowerCase(html){
  var newHtml = html.toLowerCase();
  console.log(newHtml);
}

getHTML(requestOptions, printLowerCase);