import {Router} from "express"
import { server ,app } from "./serverchat.js";
import './socket.js'
import '../../public/src/controller/controller.js'

const router = Router()



router.get('/login', (req, res) =>{
    res.render('login')
})
router.get('/cadastro', (req, res) =>{
  res.render('cadastro')
})





server.listen(3000, ()=>{
    console.log('Estamos on!!!!')
  })
  














