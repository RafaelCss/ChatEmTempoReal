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
 
  res.status(400).send(`Usuário já existe ou houve um erro`)
  console.log(err)
})


  })



   router.post('/login', async (req, res) =>{

    const {email,password} = req.body

    const user = await prisma.cadastro.findMany({
      where: {
           email : email,
           password : password,
      }       
           
    }).then(user => {
      if(user.length > 0){
      const data = {
       name: user[0].name,
        email: user[0].email,
       }

      return  res.send({
        data
        }).status(200)

      }else{
        return res.send(`Usuário não encontrado`).status(400)
      }
    }).catch(err => {
      console.log(err)
    })
    
    
      })
     
   

/* router.post('/login', (req, res) => {
    const {email,password} = req.body
    const user = prisma.cadastro.findMany({
       where: {
            email : email,
      }
}).then(user => {
  const data = {
    name: user[0].name,
    email: user[0].email,
  }
console.log(data)

res.send(data)

})


})
 */






export default router;