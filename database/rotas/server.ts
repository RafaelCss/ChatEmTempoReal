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
app.use(express.static(path.join(dirname, "public")));
app.set("view engine", "ejs");


app.listen(process.env.PORT || 3333, () => {
    console.log("Server is running on port 3333")
})


