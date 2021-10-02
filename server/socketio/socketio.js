import Orchestrator from '../../public/src/controller/orchestrator.js';
import express from 'express';
const app = express()
import { createServer } from 'http';
const server = createServer(app);
import { Server}  from "socket.io";
const io =  new Server(server);
import path from 'path';
const __dirname = path.resolve();

app.use(express.static('.'));
app.use(express.static('public/src/view/'));
app.use(express.static('public/src/controller/'));
app.use(express.static('public/src/util/'));


app.get('/', function(req, res) {
  res.sendFile( __dirname + 'index.html');
});


io.on('connection', (socket) => {
  Orchestrator.receiveData(socket.id)
});



io.on('connection', (socket) => {
  socket.broadcast.emit('hi');
});


io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});


io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    Orchestrator.receiveMsg(msg)
  });

});




server.listen(3000, ()=>{

  console.log('Estamos on!!!!')
})


export default io;