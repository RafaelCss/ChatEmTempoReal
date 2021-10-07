
// Definição dos campos da tabela

import { Sequelize } from "Sequelize";
import sequelize from "./db.js";

const bd = sequelize;

const User = bd.define('User', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: true,
      primaryKey : true
    },
    name: {
      type: Sequelize.STRING,
       allowNull :true,
    },

    email: {
        type : Sequelize.STRING,
        allowNull : true,
    },
    
    password: {
      type : Sequelize.INTEGER,
      allowNull : false,
      
    } 
  }, 
  
  {
  
  });

  User.sync()

  export default User;