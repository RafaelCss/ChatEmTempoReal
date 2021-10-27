import express  from "express";
import { router } from "./serverchat.js";
import path from 'path';
import {server} from "./serverchat.js"; 
import './socket.js'
import '../../public/src/controller/controller.js'
import Orchestrator from '../../public/src/controller/orchestrator.js'
const __dirname = path.resolve();


router.get("/chat" , (req, res , next) => { 

  res.sendFile(path.join(__dirname + '/public/src/view/chat.html'));
 
 
  })

router.post("/chat" , async (req, res) => { 

  await fetch('http://localhost:3333', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(Orchestrator.getData())
 
  }).then(res => {


        res.json()
        const resposta = res.json()
        console.log(resposta)

  }).cath(error => 
    console.error(error))

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
  














