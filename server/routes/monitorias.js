const express = require("express");

const ruta = express.Router();

const monitoriaController = require("../controllers/monitoriasController");

ruta.post("/monitoria", monitoriaController.crearMonitoria);
ruta.delete("/monitoria", monitoriaController.eliminarMonitoria);
ruta.patch("/monitoria", monitoriaController.editarMonitoria);
ruta.get("/monitoria", monitoriaController.listarMonitoria);

module.exports = ruta;