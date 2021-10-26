import express  from "express";
import { router } from "./serverchat.js";
import path from 'path';
import {server} from "./serverchat.js"; 
import './socket.js'
import '../../public/src/controller/controller.js'
const __dirname = path.resolve();


router.get("/chat" , (req, res) => { 

 res.sendFile(path.join(__dirname + '/public/src/view/chat.html'));
    
})

router.get("/" , (req, res , next) => { 

 res.sendFile(path.join(__dirname + '/public/src/view/index.html'));


 })


router.get("/cadastro" , (req, res) => { 
    
 res.sendFile(path.join(__dirname + '/public/src/view/cadastro.html'));
        
 })





server.listen(3000, ()=>{
    console.log('Estamos on!!!!')
  })
  














