const express = require('express');
const llamadaController = require('../controllers/llamadas.controller');
const md_autentificacion = require('../middlewares/auth');

var api = express.Router();

api.post('/guardarLlamada', llamadaController.guardarLlamada);

module.exports = api;