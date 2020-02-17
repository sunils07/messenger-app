const io = require('socket.io-client')

export default function () {
    const socket = io.connect('http://localhost:4000?token=hskhfds5656fwrew&id=001');

    function emitMessage(data) {
        socket.emit('message', {
            ...data,
            socketId: socket.id
        })
    }

    socket.on('message', function (data) {
        console.log(data);
    });

    return {
        emitMessage
    }
}