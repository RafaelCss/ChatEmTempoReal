
// Definição dos campos da tabela

import { Sequelize } from "Sequelize";
import sequelize from "./db.js";

const bd = sequelize;

const User = bd.define('User', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey : true
    },
    name: {
      type: Sequelize.STRING,
       allowNull :false,
    },

    email: {
        type : Sequelize.STRING,
        allowNull : true,
    }


  }, 
  
  
  {
    // Other model options go here
  });
  
  User.sync()

  export default User;