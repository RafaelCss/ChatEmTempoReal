import { router } from "./serverchat.js";
import path from 'path';
import {server} from "./serverchat.js"; 
import './socket.js'
import axios from 'axios'
const __dirname = path.resolve();


router.get("/chat" , (req, res , next) => { 
    
  res.sendFile(path.join(__dirname + '/public/src/view/chat.html'));
 
 
  })
  const api = axios.create({
    baseURL: 'http://localhost:3333/cadastro'
})






   const instance = axios.create({
    baseURL: 'http://localhost:3333/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'a'}
  });





  

router.get("/" , (req, res , next) => { 

 res.sendFile(path.join(__dirname + '/public/src/view/index.html'));


 })


router.get("/cadastro" , (req, res) => { 
    
 res.sendFile(path.join(__dirname + '/public/src/view/cadastro.html'));
        
 })






server.listen(3000, ()=>{
    console.log('Estamos on!!!!')
  })
  




export default api 












