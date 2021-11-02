import { io } from "./serverchat.js";
import '../../public/src/controller/controller.js'

io.on('connection', socket => {
  console.log('a user connected', socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id) ;
  });
});

io.on('connection', socket => {
  socket.on('chat message', (data) => {
    io.emit('chat message', data)
      });
  });