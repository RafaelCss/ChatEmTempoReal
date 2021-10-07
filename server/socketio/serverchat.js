import express from 'express';
import  http  from 'http';
import { Server}  from "socket.io";
/* import path from 'path';




const __dirname = path.resolve(); */
const app = express()
const server = http.createServer(app);
const io =  new Server(server);

app.use(express.static('.'));
app.use('/messagechat',express.static('public/src/view/'));
app.use(express.static('public/src/controller/'));
app.use(express.static('public/src/util/'));
app.use(express.static('server/socketio/'));



export {server , io , app}