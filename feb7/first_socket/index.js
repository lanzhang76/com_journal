var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        // this is sending to all clients
        io.emit('chat message', {
            username: msg.username,
            message: msg.message
        });
    });
    socket.on('give ouch', (emoji) => {
        io.emit('give ouch', emoji)
    })
});

http.listen(4889, function () {
    console.log('listening on *:4889');
});