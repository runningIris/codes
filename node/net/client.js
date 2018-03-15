const net = require('net');
const client = net.connect({path: '/tmp/echo.sock'}, function(){
    console.log('client connected');
    client.write('world!\r\n');
});

client.on('data', function (data) {
    console.log(data.toString());
    client.end();
});

client.on('end', function () {
    console.log('client disconnected');
});


