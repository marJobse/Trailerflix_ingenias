const { Sequelize } = require("sequelize"); // pedir la clase sequelize
require("dotenv").config;

// crear instancia de sequelize

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.PORT,
    dialect: process.env.DB_DIALECT,
  }
);

// crear autenticación de conexión y desconexión

const authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("Error al conectar la base de datos", error);
  }
};

const closeConnection = async () => {
  try {
    await sequelize.close();
    console.log("Desconexión a la base de datos exitosa");
  } catch (error) {
    console.error("Error al desconectar la base de datos", error);
  }
};

module.exports = { sequelize, authenticate, closeConnection };
