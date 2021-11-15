var http = require('http')

var port = 4000

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello World\n')
})
var apm = require('elastic-apm-node').start({
                                      serviceName: 'nodeapp',
                                      serverUrl: 'http://apm-server.logging:8200'
                                             })


server.listen(port)

console.log('Server running at http://localhost:' + port)
