const net = require('net');
const server = net.createServer(function(socket){
    socket.on('data', function(data){
        socket.write('Hello\n');
    });
    socket.on('end', function(){
        console.log('Connection ended');
    });
    socket.write('Welcome my darling');
});

server.listen('/tmp/echo.sock', () => 'Server found');
