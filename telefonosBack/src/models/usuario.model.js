const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = Schema ({
    nombre: String,
    email: String,
    password: String,
    rol: String,
    horaEntrada: Date,
    horaSalida: Date
});

module.exports = mongoose.model('usuarios', usuarioSchema);