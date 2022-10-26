const express = require('express');
const usuarioController = require('../controllers/usuario.controller');
const md_autentificacion = require('../middlewares/auth');

var api = express.Router();

api.post('/login', usuarioController.login);
api.post('/registrarUsuario', usuarioController.registrarUsuario);
api.put('/horaEntrada/:idUsuario', usuarioController.horaEntrada);
api.put('/horaSalida/:idUsuario', usuarioController.horaSalida);

module.exports = api;