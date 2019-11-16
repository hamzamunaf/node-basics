var http = require('http');

function requestHandler(req, res) {
  console.log("== Received a request");
  console.log("  -- req.url:", req.url);
  console.log("  -- req.method:", req.method);

  var resBody = "<html>";
  resBody += "<body>";
  resBody += "<h1>Hello world!</h1>";
  resBody += "</body>";
  resBody += "</html>";

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  res.write(resBody);
  res.end();
}

var server = http.createServer(requestHandler);

server.listen(8000, function () {
  console.log("== Server is listening on port 8000");
});
