import express from 'express';
const app = express()
import { createServer } from 'http';
const server = createServer(app);
import { Server } from "socket.io";
const io = new Server(server);
import path from 'path';
const __dirname = path.resolve();


app.use(express.static('view'))

app.use('/', express.static(__dirname + '/view'));
app.use('/', express.static(__dirname + '/src'));



io.on('connection', (socket) => {
  console.log('a user connected');
});


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
io.on('connection', (socket) => {
  socket.broadcast.emit('hi');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});


server.listen(3000, ()=>{

  console.log('Estamos on!!!!')
})

