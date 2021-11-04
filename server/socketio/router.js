import { router } from "./serverchat.js";
import path from 'path';
import {server} from "./serverchat.js"; 
import './socket.js'
const __dirname = path.resolve();





router.get("/cadastro" , (req, res) => { 
    
 res.sendFile(path.join(__dirname + '/public/src/view/cadastro.html'));
        
 })
  

router.get("/" , (req, res , next) => { 

 res.sendFile(path.join(__dirname + '/public/src/view/index.html'));

      next();
 })


 router.get("/chat" , (req, res, next, params) => { 

    if(params === 200){
        res.sendFile(path.join(__dirname + '/public/src/view/chat.html'));
    }else{
        res.redirect("/");
    } 
 
  })





server.listen(3000, ()=>{
    console.log('Estamos on!!!!')
  })
  


export default router;











