
const http = require('http');
// Creates the server object
const server = http.createServer();
// Creates the listener
server.on('request', (request,response) => {
  const { headers, method, url } = request;
  let body = [];
  // Request
  request.on('error',(err) => {console.error(err)}).on('data',(chunk) => {body.push(chunk)}).on('end',() => {body = Buffer.concat(body).toString()});

  // Response
  response.statusCode = 200;
  response.setHeader('Content-Type','application/json');
  // Optional => response.writeHead(200, {'Content-Type':'application/json'})

  const responseBody = { headers, method, url, body};

  response.write(JSON.stringify(responseBody));
  response.end();
  // Optional => response.end(JSON.stringify(responseBody))

}).listen(8080);

