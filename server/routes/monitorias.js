const express = require("express");

const ruta = express.Router();

const monitoriaController = require("../controllers/monitoriasController");

ruta.post("/crearMonitoria", monitoriaController.crearMonitoria);
ruta.post("/eliminarMonitoria", monitoriaController.eliminarMonitoria);
ruta.post("/editarMonitoria", monitoriaController.editarMonitoria);
ruta.get("/listarMonitoria", monitoriaController.listarMonitoria);

module.exports = ruta;