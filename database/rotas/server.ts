import cors from "cors"
import express from "express"
import router from "../rotas/router"
import path from 'path';


const dirname = path.resolve();
const app = express();

interface corsOptions {
  origin: string;
  options: number;
}

const corsOptions: corsOptions = {
  origin: "http://localhost:3000",
  options: 200,
};

//app.use(cors());
app.use(express.json());
app.use(router); //rota  para o servidor
app.set("view engine", "ejs");
app.use(express.static('.'))
app.use(express.static('public'))


app.listen(process.env.PORT || 3333, () => {
    console.log(`Servidor Rodando na porta ${process.env.PORT || 3333}`);
})


