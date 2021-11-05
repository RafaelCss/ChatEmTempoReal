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
        
       const data = {
          message : 'Usuário Criado com Sucesso',
          user    :  user.email,
          status  : 200
       }
    res.send(data)

}).catch(err => {

      const erro = {
        message :'Usuário já existe ou houve um erro',
        status  : 400
      }

  res.send(erro)

  console.error(err)
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
       status : 200
       }

      return  res.send(data)

      }else{

        const erro = {
          message : `Usuário não encontrado, realize seu cadastro`,
          user : `Este email não exite }`,
          status : 400  
        }

        return res.send(erro)

      }
    }).catch(err => {

      console.log(err)
      
    })
    
    
})
     








export default router;