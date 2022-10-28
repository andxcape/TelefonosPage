const Llamadas = require('../models/llamadas.model');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt');

function guardarLlamada(req, res) {
    var parametros = req.body;
    var llamadasModel = new Llamadas();

        llamadasModel.numero = parametros.numero;
        llamadasModel.descripcion = parametros.descripcion;
        llamadasModel.solucion = parametros.solucion;
        llamadasModel.horaInicio = parametros.horaInicio;
        llamadasModel.horaFin = new Date().toLocaleTimeString();
        llamadasModel.tipo = parametros.tipo;
        llamadasModel.finalizada = false;
        llamadasModel.idUsuario = parametros.idUsuario;

        llamadasModel.save((err, callGuardada) => {
            
            if (err){console.log(err)
                 return res.status(500).send({ message: "error en la peticion" })} 
            if (!callGuardada) return res.status(404).send({ message: "No se puede agregar la llamada" });
            return res.status(200).send({ llamadas: callGuardada });
        })
}

module.exports = {
    guardarLlamada
}