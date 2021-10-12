import  {Sequelize}  from "sequelize";

// Conexão com Banco de Dados 

const sequelize = new Sequelize('cad_user_chat','root', '42951822' , {
    host: 'localhost',
    dialect: 'mysql'
})


await  sequelize.authenticate()
.then(function(){
  
    console.log('deu tudo certo')

}).catch(function(){

    console.log('Error : Verifique sua conexão')
})

export default sequelize;
