import cors from "cors"
import express  from "express"
import router from "../rotas/router"
import path from 'path';



const app = express()

interface  corsOptions  {
    origin : string,
    options : number,
}

const  corsOptions  = { 
 origin : 'http://localhost:3000' , 
 options : 200 
  } 
   
app.use(cors())
app.use(express.json())
app.use(router)    //rota  para o servidor 

app.set('view engine', 'html') 
app.use(express.static('.'))      
app.use(express.static('rotas'))



app.listen(3333, () => {
    console.log("Server is running on port 3333")
})


