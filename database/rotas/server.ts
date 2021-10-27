import express  from "express"
import router from "../rotas/router"
const app = express()



app.use(express.json())
app.use(router)    //rota  para o servidor 





app.listen(3333, () => {
    console.log("Server is running on port 3000")
})


