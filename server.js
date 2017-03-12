var PORT = 1234,
    CORS = {'Access-Control-Allow-Origin': 'http://localhost'};

require('http')
  .createServer(function(req, res){
    res.writeHead(200, CORS);
    res.end('hello from port ' + PORT);
  })
  .listen(PORT);
