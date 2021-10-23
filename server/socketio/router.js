import express from "express"
import {Router} from "express"
import path from "path"
import { server ,app } from "./serverchat.js";
import './socket.js'
import '../../public/src/controller/controller.js'

const router = Router()


app.use(express.static('public/src/view/login.html'))
router.get('/login', (req, res) =>{
    res.render('login')
})
router.get('/cadastro', (req, res) =>{
  res.render('cadastro')
})


server.listen(3000, ()=>{
    console.log('Estamos on!!!!')
  })
  














