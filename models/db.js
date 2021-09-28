import  {Sequelize}  from "sequelize";

// Conexão com Banco de Dados 

const sequelize = new Sequelize('********','root', "*******",{
    host: 'localhost',
    dialect: 'mysql'
})


sequelize.authenticate()
.then(function(){

    console.log('deu tudo certo')

}).catch(function(){

    console.log('Error : Verifique sua conexão')
})

export default sequelize;
