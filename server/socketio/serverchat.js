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
app.use(express.static('server/socketio/'));



export {server , io}