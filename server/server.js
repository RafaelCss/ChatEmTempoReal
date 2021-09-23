import express from "express";
import User from "../models/Users.js";
const user = User


const app = express();
const port = 3001;

app.use(express.json())

app.get('/' , (req,res) =>{
    res.send('Hello Word')
})

app.post('/cadastro' , async (req,res) =>{
    console.log(req.body)
    await user.create(req.body)
    res.send('Hello Word')
})



app.listen(port, ()=>{

console.log('Server Starting ....')
})