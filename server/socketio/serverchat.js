import express from 'express';
const app = express()
import  http  from 'http';
import { Server}  from "socket.io";
import path from 'path';
import ejs from 'ejs';



const __dirname = path.resolve();
const server = http.createServer(app);
const io =  new Server(server)
const router = express.Router()
app.use(router)
app.engine('html', ejs.renderFile);
app.set('view engine', 'html') 



app.use(express.static('.'))      
app.use(express.static('public/src/view/'))
app.use('/cadastro',express.static('public/src/view/'))
app.use('/chat',express.static('public/src/view/'))
app.use('/login',express.static('public/src/view/'))
app.use(express.static('public/src/controller/'))
app.use(express.static('public/src/util/'))
app.use(express.static('server/socketio/'))
 


export {server , io , app , router}