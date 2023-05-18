'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: "Name can only contains characters"
        },
        len: {
          args: [2, 255],
          msg: "The name must have at least 2 characters"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          msg: "The password must have at least 6 characters"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: { msg: "The email must have a valid format" }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};