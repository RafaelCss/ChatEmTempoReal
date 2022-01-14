// Tratamento das requisições
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


interface Models {  // em evolução
  name : string;
  email : string;
  password : string;
  updateAt : Date;
  messageSend ?: string;
  img ?: string
  }
  
class Treatment {
 static  async addBank(name :string , email : string , password : string) {
    const user = await prisma.cadastro
      .create({
        data: {
          name,
          email,
          password,  
          updatedAt: new Date(),
        },
      })
      .then((user) => {
        if (!user === null) {
          const cad = { data: user.email, status: 200 };
          return cad;
        } else {
          const cad = { data: user.email, status: 400 };
          return cad;
        }
      })
      .catch((err) => {
        return err;
        // res.status(400).send(`Usuário já existe ou houve um erro`)
      });
  }

  static async loginConfirm(email: string, password: string) {
    const user = await prisma.cadastro
      .findMany({
        where: {
          email: email,
          password: password,
        },
      })
      .then((user) => {
        if (user.length > 0) {
          const data = {
            name: user[0].name,
            email: user[0].email,
          };

          return data;
        } else {
          return false;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default Treatment;
