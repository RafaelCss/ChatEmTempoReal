import { Router } from "express";;
import { PrismaClient } from '@prisma/client'

import path from "path";

const dirname = path.resolve();

const router = Router();
const prisma = new PrismaClient(); // Inicialização do cliente do prisma

router.get("/", (req, res) => {
  res.render(path.join(dirname + "/public/src/views/index.ejs"));
});
router.get("/cadastro", (req, res) => {
  res.render(path.join(dirname + "/public/src/views/cadastro.ejs"));
});

 router.get("/chat/:id", (req, res) => {
  res.render(path.join(dirname + "/public/src/views/chat.ejs"));
});

router.post('/cadastro', async (req, res) => { //cadastrar usuário
  console.log(req.body);
  const { name, email, password } = await req.body
  const user = await prisma.cadastro.create({
    data: {
      name,
      email,
      password,
      updatedAt: new Date(),
    }
  }).then((user: { email: any; }) => {
    const data = {
      message: 'Usuário Criado com Sucesso',
      user: user.email,
      status: 200
    }
    res.send(data)
  }).catch((err: { meta: any; }) => {
    const { meta } = err // meta parâmetro prisma
    const erro = {
      message: meta.target,
      status: 400
    }
    if (meta.target === 'Cadastro_email_key') {
      res.send(erro)
      console.error(`===> Email já cadastrado na base erro code : ${meta.target}`)
    }
  })
})


router.post('/login', async (req, res) => { // logar usuário
  console.log('login',req.body)
  const { email, password } = req.body
  const user = await prisma.cadastro.findMany({
    where: {
      email: email,
      password: password,
    }
  }).then((user: string | any[]) => {
    if (user.length > 0) {
      const data = {
        name: user[0].name,
        email: user[0].email,
        user: user[0].user,
        status: 200
      }
      return res.send(data)
    } else {
      const erro = {
        message: `Usuário não encontrado, realize seu cadastro`,
        user: `Este email não existe `,
        status: 400
      }
      return res.send(erro)
    }
  }).catch((err: any) => {
    console.log(err)
  })
})

router.get('/chat/:user', async (req, res) => { //trazer informações do usuário
  const { user } = req.params
  const userDados = prisma.cadastro.findMany({
    where: {
      user
    }
  }).then((resposta: { email: any; name: any }[]) => {
    const data = {
      name: resposta[0].name,
      email: resposta[0].email
    }
    return res.send(data)
  }).catch((err: any) => {
    console.error(err)
  })
})

router.post('/chat', async (req, res) => { // logar usuário
  const { messageSend, img, email } = req.body
  await prisma.message.create({
    //criar uma com base na tabela vai ser criado um novo registo
    data: {
      messageSend,
      img,
      email,
    }
  }).then((resposta: any) => {
    res.send(resposta)
  }).catch((err: any) => {
    console.error(err)
  })
})

router.get('/message/:email', async (req, res) => { // logar usuário
  const { email } = req.params
  const user = await prisma.message.findMany({
    where: {
      email,
    }
  }).then((resposta: any) => {
    res.send(resposta)
  })
})




export default router;