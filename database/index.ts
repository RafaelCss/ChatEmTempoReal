import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface user {
    
    email:   string,
    password:string,
    name:    string
    }

async function main() {
  const user = await prisma.post.create({
        data: {
        email:'rf2014@jaca.com',
        password:'42951822',
        name:'Rafael'
        }
    })
}    

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })


