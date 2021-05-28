//here will be the models for users

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/connection");

//constructing our model
//user id , name, email , password

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
  },
  {
    username: {
      type: DataTypes.STRING,
    },
  },
  {
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    email: {
      type: DataTypes.STRING,
    },
  }
);
