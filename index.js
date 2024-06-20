var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on("connection",(socket) => {

    socket.on("disconnect", () =>{
        console.log("X se desconectou: " + socket.id);
    })

    socket.on("msg", (data) =>{
        io.emit("showmsg", data);
        console.log(data);
    });
});


app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("index");
});

http.listen(3000, () => {
    console.log('App is running!');
});