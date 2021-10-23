'use strict';


export async function up(queryInterface, Sequelize) {

  await queryInterface.createTable( ('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey : true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    email: {
        type : Sequelize.STRING,
        allowNull: false,
    },
    
    password: {
      type : Sequelize.INTEGER,
      allowNull: false,
      
    } 


  })) 
  
  {


    await queryInterface.createTable( ('message_user', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey : true,
      },
      msg: {
          type : Sequelize.STRING,
          
      },
      
     userId : {

      hasOne(user)


     }
  
    })) 
  
  } 

}
export async function down(queryInterface, Sequelize) {

  await queryInterface.dropTable('Teste');

}
