import { Router} from "express";
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()   // Inicialização do cliente do prisma

router.post('/cadastro', async (req, res) =>{

const {name, email, password} = req.body
const user = await prisma.cadastro.create({
    data: {
        name,
        email,
        password,
        updatedAt: new Date(),
    }
}).then(user => {
    res.send(`Usuário Criado com Sucesso : ${user.email}`)
}).catch(err => {
  res.send(`Usuário já existe ou houve um erro`)
  console.log(err)
})


  })
    
   

router.get('/', (req, res) => {
    res.send('Rota de rotas')
})







export default router;