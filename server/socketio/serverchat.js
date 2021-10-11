import express from 'express';
const app = express()
import  http  from 'http';
import { Server}  from "socket.io";
import path, { dirname } from 'path';



const server = http.createServer(app);
const io =  new Server(server);
app.set('views','public/src/view')
app.set('view engine', 'html')
/* app.use(express.static(path.join(__dirname, '..' , 'public'))); */
app.use(express.static('.'));
app.use('/messagechat',express.static('public/src/view/'));
app.use(express.static('public/src/controller/'));
app.use(express.static('public/src/util/'));
app.use(express.static('server/socketio/'));



export {server , io , app}