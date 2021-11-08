import { response, Router} from "express";
import { PrismaClient } from '@prisma/client'


const router = Router()
const prisma = new PrismaClient()   // Inicialização do cliente do prisma

type data = {
name : String
email : String
password : String
updateAt : Date
}
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

  const {meta} = err

      const erro = {
        message : meta.target,
        status  : 400
      }

      if(meta.target === 'Cadastro_email_key'){
      res.send(erro)
      console.error(`===> Email já cadastrado na base erro code : ${meta.target}`)
      }
  
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
       user: user[0].user,
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
     
router.get('/chat/:user', async (req,res)=>{

  const {user} = req.params

  console.log(JSON.stringify( user))

  const userDados =  prisma.cadastro.findMany({
    where: {
          user
        } 
  
    }).then(resposta =>{  

      const data ={
        name : resposta[0].name,
        email : resposta[0].email  
      }
      res.send(data)

    }).catch(err =>{

      console.error(err)
    })

})








export default router;