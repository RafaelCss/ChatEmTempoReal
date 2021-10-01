import express from "express";
import Users from './models/Users.js'
const user = Users


const app = express();
const port = 3001;

app.use(express.json())

app.get('/' , (req,res) =>{
    res.send('Hello Word')
})

app.post('/cadastro' , async (req,res) =>{
    console.log(req.body)

    try {
        
        await user.create(req.body)
        res.sendStatus(200)
    } catch (error) {
     
        console.log(`Error : ${error}`)
        res.sendStatus(400)
    }
    
})



app.listen(port, ()=>{

console.log('Server Starting ....')
})