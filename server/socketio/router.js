import { router } from "./serverchat.js";
import path from 'path';
import {server} from "./serverchat.js"; 
import './socket.js'
import { response } from "express";
const __dirname = path.resolve();





router.get("/cadastro" , (req, res) => { 
    
 res.sendFile(path.join(__dirname + '/public/src/view/cadastro.html'));

 })
  

router.get("/" , (req, res , next) => { 

  res.sendFile(path.join(__dirname + '/public/src/view/index.html'));

      next();
 })


 router.get("/chat" , (req, res, next) => { 
 
  res.sendFile(path.join(__dirname + '/public/src/view/chat.html'));

 
  })


  router.post("/cadastro" , (req, res) => { 
    
    res.send("cadastro realizado com sucesso");
         const  response = req.params;
         console.log(response);
    })


 


server.listen(3000, ()=>{
    console.log('Estamos on!!!!')
  })
  


export default router;











