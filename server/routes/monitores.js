const express = require("express");

const ruta = express.Router();

const monitorController = require("../controllers/monitoresController");

ruta.post("/crearMonitor", monitorController.crearMonitor);
ruta.post("/obtenerMonitor", monitorController.obtenerMonitor);
ruta.post("/eliminarMonitor", monitorController.eliminarMonitor);
ruta.post("/editarMonitor", monitorController.editarMonitor);
ruta.get("/listarMonitor", monitorController.listarMonitor);

module.exports = ruta;
