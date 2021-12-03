const express = require("express");

const app = express();

const mysql = require("mysql");

const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

db.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Conexion Exitosa ;3");
  }
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}`);
});
