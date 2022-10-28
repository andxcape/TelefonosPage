const express = require('express');
const llamadaController = require('../controllers/llamadas.controller');

var api = express.Router();

api.post('/guardarLlamada', llamadaController.guardarLlamada);
api.get('/obtenerLlamadas/:idUsuario', llamadaController.ObtenerLlamadaUsuario);

module.exports = api;