const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: process.env.WS_PORT });

wss.on('connection', webSocket => {
    console.log('connection established');
});

wss.on('close', function close() {
    console.log('disconnected');
});

wss.on('error', function close() {
    console.log('error');
});