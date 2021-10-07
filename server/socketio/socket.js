import { io } from "./serverchat.js";
import Orchestrator from '../../public/src/controller/orchestrator.js';
import '../../public/src/controller/controller.js'


  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
  
  io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
  
  io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
  });
  
  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
      Orchestrator.receiveData({
        date : new Date(),
        msg: msg,
        id: socket.id,
      })
    });
  });