
import { router } from "./serverchat.js";
import path from 'path';
import {server} from "./serverchat.js"; 
import './socket.js'
import '../../public/src/controller/controller.js'
import Orchestrator from '../../public/src/controller/orchestrator.js'
import axios from 'axios'
const __dirname = path.resolve();


router.get("/chat" , (req, res , next) => { 
    
  res.sendFile(path.join(__dirname + '/public/src/view/chat.html'));
 
 
  })


   const instance = axios.create({
    baseURL: 'http://localhost:3333/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
 

 axios.post('http://localhost:3333/cadastro', {
  email: 'rf2015@tanquedeguerra.com',
  name: 'Juca de A louca',
  password: '123456'
}).then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
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
  














