var getHTML = require('./http-functions');

var requestOptions = {
  host: 'syntatris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printReverse(html){

  var newHtml = html.split("").reverse().join("");
  console.log(newHtml);
}

getHTML(requestOptions, printReverse);