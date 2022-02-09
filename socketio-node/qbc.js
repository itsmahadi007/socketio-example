var app = require('express')();
var http = require('http').Server(app);
// var io = require('socket.io')(http);

const io = require("socket.io")(http, {
    cors: {
        origins: [
            "http://localhost:3001",
            "http://localhost:4200",
            "http://localhost:8080",
        ],
    },
});

app.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
});

io.on('connection',function(socket){
    console.log('one user connected '+socket.id);


    socket.on('CHAT' , function (data) {
        console.log('======CHAT message========== ');
        console.log(data);
        // socket.emit('CHAT',data);
       // io.emit('CHAT', `server: ${data}`);

    });

    socket.on('disconnect',function(){
        console.log('one user disconnected '+socket.id);
    });

})

http.listen(3000,function(){
    console.log('server listening on port 3000');
})