import { server ,app } from "./serverchat.js";
import './socket.js'
import '../../public/src/controller/controller.js'


app.get('/login', (req, res) =>{
    res.render('../../public/src/view/login.html')
})
app.get('/cadastro', (req, res) =>{
  res.render('../../public/src/view/cadastro.html')
})


server.listen(3000, ()=>{
    console.log('Estamos on!!!!')
  })
  














