var http = require('http');
var fs = require('fs');

var server = http.createServer(function (llamado , respuesta){
    console.log('request: '+llamado.url);
respuesta.writeHead(200,{'Content-Type': 'text/html'});
var myReadStream = fs.createReadStream('../CiudadanosDe4Patas/Ciudadanosde4Patas.html','utf8');
myReadStream.pipe(respuesta);
});

server.listen(3000 , '127.0.0.1');
console.log('port 3000');