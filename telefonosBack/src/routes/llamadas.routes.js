const express = require('express');
const llamadaController = require('../controllers/llamadas.controller');
const md_autorizacion = require('../middlewares/auth');


var api = express.Router();

api.post('/guardarLlamada',[md_autorizacion.Auth], llamadaController.guardarLlamada);
api.get('/obtenerLlamadas/:idUsuario', [md_autorizacion.Auth], llamadaController.ObtenerLlamadaUsuario);

module.exports = api;   