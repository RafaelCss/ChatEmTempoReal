import { router } from "./serverchat.js";
import path from 'path';
import {server} from "./serverchat.js"; 
import './socket.js'
import axios from "axios";







const __dirname = path.resolve();



router.get("/cadastro" , async (req, res, next) => { 

  res.sendFile(path.join(__dirname + '/public/src/view/cadastro.html'));

 })
  

router.get("/" , (req, res , next) => { 

  res.sendFile(path.join(__dirname + '/public/src/view/index.html'));

      next();
 })


 router.get("/chat/:id" , (req, res, next) => { 
 
  res.sendFile(path.join(__dirname + '/public/src/view/chat.html'));

 
  })



  server.listen(3000, ()=>{
    console.log('Estamos on!!!!')
  })
  

export default router;











