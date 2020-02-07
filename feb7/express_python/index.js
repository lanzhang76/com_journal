var express = require('express');
var app = express();

// Creates a server which runs on port 3000 and  
// can be accessed through localhost:3000 
app.listen(3000, function () {
    console.log('server running on port 3000');
})

// Function callName() is executed whenever  
// url is of the form localhost:3000/name 
app.get('/name', callName);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });;
});

function callName(req, res) {


    var spawn = require("child_process").spawn;
    // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
    var process = spawn('python', ["./try.py",
        req.query.firstname,
        req.query.lastname]);
    // Takes stdout data from script which executed 
    // with arguments and send this data to res object 
    process.stdout.on('data', function (data) {
        res.send(data.toString());
    })
} 