import { server ,app } from "./serverchat.js";
import './socket.js'
import '../../public/src/controller/controller.js'


app.get('/login', (req, res) =>{
    res.render('login')
})
app.get('/cadastro', (req, res) =>{
  res.render('cadastro')
})


server.listen(3000, ()=>{
    console.log('Estamos on!!!!')
  })
  














