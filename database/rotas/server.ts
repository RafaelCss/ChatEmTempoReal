import cors from "cors"
import express  from "express"
import router from "../rotas/router"

const app = express()

interface  corsOptions  {
    origem : string,
    options : number,
}

const  corsOptions  = { 
    origem : 'http://localhost:3000' , 
    optionsSuccessStatus : 200 //  alguns navegadores legados (IE11, várias SmartTVs) bloqueados em 204  
  } 
   
app.use(cors(corsOptions))
app.use(express.json())
app.use(router)    //rota  para o servidor 






app.listen(3333, () => {
    console.log("Server is running on port 3000")
})


