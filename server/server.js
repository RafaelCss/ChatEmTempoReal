import express from "express";
import User from "../models/Users.js";
const user = User

app.use(express.json())
const app = express();
const port = 3001;




app.get('/' , (req,res) =>{
    res.send('Hello Word')
})

app.post('/cadastro' , async (req,res) =>{
    console.log(req.body)
    res.send('Hello Word')
})



app.listen(port, ()=>{

console.log('Server Starting ....')
})