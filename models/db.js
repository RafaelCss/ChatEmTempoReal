import dotenv  from  'dotenv' 
import config from './config/config.js';
import  {Sequelize}  from "sequelize";
 

// Conexão com Banco de Dados 

const sequelize = new Sequelize(config)


await  sequelize.authenticate()
.then(function(){
  
    console.log('deu tudo certo')

}).catch(function(){

    console.log('Error : Verifique sua conexão')
})





export default sequelize;
