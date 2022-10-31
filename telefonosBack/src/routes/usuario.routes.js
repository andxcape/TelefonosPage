const express = require('express');
const usuarioController = require('../controllers/usuario.controller');
const md_autorizacion = require('../middlewares/auth');

var api = express.Router();

api.post('/login' ,usuarioController.login);
api.post('/registrarUsuario', usuarioController.registrarUsuario);
api.put('/horaEntrada/:idUsuario', [md_autorizacion.Auth] , usuarioController.horaEntrada);
api.put('/horaSalida/:idUsuario',[md_autorizacion.Auth], usuarioController.horaSalida);
api.get('/obtenerUsuario/:idUsuario',[md_autorizacion.Auth], usuarioController.ObtenerUsuarioId);

module.exports = api;