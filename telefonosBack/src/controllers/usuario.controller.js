const Usuarios = require('../models/usuario.model');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt');

function login(req, res) {
    var paramentros = req.body;

    Usuarios.findOne({ email: paramentros.email }, (err, usuarioGuardado) => {
        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' })
        if (usuarioGuardado) {
            bcrypt.compare(paramentros.password, usuarioGuardado.password, (err, verificacionPassword) => {
                if (verificacionPassword) {
                    return res.status(200).send({
                        token: jwt.crearToken(usuarioGuardado),objeto:usuarioGuardado
                    })

                } else {
                    return res.status(500).send({ mensaje: 'La contrasena no coincide' })
                }
            })
        } else {
            return res.status(500).send({ mensaje: 'El usuario no se encuentra o no se identifica' })
        }
    })
}

function registrarUsuario(req, res) {
    var parametros = req.body;
    var usuariosModel = new Usuarios();

    if (parametros.nombre, parametros.email) {
        usuariosModel.nombre = parametros.nombre;
        usuariosModel.email = parametros.email;
        usuariosModel.rol = 'ROL_CALLCENTER';
        Usuarios.find({ nombre: parametros.nombre }
            , (err, usuarioGuardado) => {
                if (usuarioGuardado.length == 0) {
                    bcrypt.hash(parametros.password, null, null, (err, passwordEncriptada) => {
                        usuariosModel.password = passwordEncriptada;
                        usuariosModel.save((err, usGuardado) => {
                            if (err) return res.status(500).send({ mensaje: 'No se realizo la accion' });
                            if (!usGuardado) return res.status(404).send({ mensaje: 'No se agrego la empresa' });

                            return res.status(201).send({ usuarios: usGuardado });
                        })
                    })
                } else {
                    return res.status(500).send({ mensaje: 'Error en la peticion' });
                }
            })
    } else {
        return res.status(500).send({ mensaje: 'Error en la peticion agregar' });
    }
}

function horaEntrada(req, res) {
    var idUser = req.params.idUsuario;
    let hora = new Date();

    Usuarios.findByIdAndUpdate(idUser, { horaEntrada: hora.toLocaleTimeString("en-US") }, { new: true }, (err, usuarioEdit) => {

        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if (!usuarioEdit) return res.status(400).send({ mensaje: 'No se puede ediar el usuario' });

        return res.status(200).send({ usuarios: usuarioEdit });
    })
}

function horaSalida(req, res) {
    var idUser = req.params.idUsuario;
    let hora = new Date();

    Usuarios.findByIdAndUpdate(idUser, { horaSalida: hora.toLocaleTimeString("en-US") }, { new: true }, (err, usuarioEdit) => {

        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if (!usuarioEdit) return res.status(400).send({ mensaje: 'No se puede ediar el usuario' });

        return res.status(200).send({ usuarios: usuarioEdit });
    })
}

function jornada(req, res){
    var idUser = req.params.idUsuario;

    Usuarios.findById(idUser, {jornada: { $gte: new Date({horaEntrada}), $lte: new Date(horaSalida) } }, { new: true }, (err, usuarioEdit) => {

        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if (!usuarioEdit) return res.status(400).send({ mensaje: 'No se puede ediar el usuario' });

        return res.status(200).send({ usuarios: usuarioEdit });
    })

}

function ObtenerUsuarioId(req, res){
    var idUsuario = req.params.idUsuario

    Usuarios.findById(idUsuario,(err,usuarioEncontrado)=>{
        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if (!usuarioEncontrado) return res.status(404).send( { mensaje: 'Error al obtener el usuario' });
        return res.status(200).send({ usuarios: [usuarioEncontrado] });
        
    })
}


module.exports = {
    login,
    registrarUsuario,
    horaEntrada,
    horaSalida,
    ObtenerUsuarioId
}