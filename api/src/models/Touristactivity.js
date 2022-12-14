const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Touristactivity', {
    ID : {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty : {
      type : DataTypes.ENUM('1','2','3','4','5'),
      allowNull: false,
    },
    duration: {
      type : DataTypes.INTEGER,
      allowNull: false,
    }, 
    season : {
      type : DataTypes.ENUM('summer','winter','spring','autumn', 'all seasons'),
      defaultValue : 'all seasons'
    }
  },{
    timestamps : false
  });
};