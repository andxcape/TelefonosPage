const express = require('express');
const usuarioController = require('../controllers/usuario.controller');

var api = express.Router();

api.post('/login', usuarioController.login);
api.post('/registrarUsuario', usuarioController.registrarUsuario);
api.put('/horaEntrada/:idUsuario', usuarioController.horaEntrada);
api.put('/horaSalida/:idUsuario', usuarioController.horaSalida);
api.get('/obtenerUsuario/:idUsuario', usuarioController.ObtenerUsuarioId);

module.exports = api;