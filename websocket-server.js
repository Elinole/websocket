const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: process.env.WS_PORT });

wss.on('connection', webSocket => {
    console.log('connection established');

    webSocket.on('message', function(msgEvent){
        console.log(msgEvent);
        webSocket.send(msgEvent);
    });

    webSocket.send(JSON.stringify({
        user: 'Server',
        message: 'Welcome !'
    }));
    
    webSocket.on('close', () => {
        console.log('connection closed by client');
    });
});

wss.on('error', function close() {
    console.log('error');
});