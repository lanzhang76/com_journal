$(function () {
    var socket = io();
    $('form').submit(function (e) {
        e.preventDefault(); // prevents page reloading
        socket.emit('chat message', {
            username: $('#username').val(),
            message: $('#m').val()
        });
        $('#m').val('');
        $('#username').val('');
        return false;
    });

    $('#smile').click(() => {
        socket.emit('give ouch', '😋');
    })

    // this is to receive any 
    socket.on('chat message', function (msg) {
        $('#stream').append($('<span>').text(` ${msg.username} : ${msg.message}`));
    });

    socket.on('give ouch', (emoji) => {
        $('#stream').append($('<span>').text(` ${emoji}${emoji}`));
    })
});

