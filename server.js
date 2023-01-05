const express=require('express');
const socket=require('socket.io');

const app=express()
const server=app.listen(3001)

app.use(express.static('public'));

const io=socket(server)

io.on('connection', (socket)=>{
    console.log(socket.io);
    socket.on('chat',data=>{
    io.sockets.emit('chat',data)
    })
})