const Llamadas = require('../models/llamadas.model');
const Usuarios = require('../models/usuario.model');


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

function ObtenerLlamadaUsuario(req, res){
    var nombreUsuario = req.params.nombreUsuario;

        Usuarios.findOne({nombre: {$regex:nombreUsuario,$options:'i'}},(err, usuarioEncontrado)=>{
            if(err) return res.status(500).send({ mensaje: "Error en la peticion"});
            if(!usuarioEncontrado) return res.status(404).send({mensaje : "Error, no se encuentran categorias con ese nombre"});

            Llamadas.find({idUsuario: usuarioEncontrado._id}, (err, llamadasUsuario)=>{
                if(err) return res.status(500).send({ mensaje: "Error en la peticion"});
                if(!llamadasUsuario) return res.status(404).send({mensaje : "Error, no se encuentran productos en dicha categoria"});

                return res.status(200).send({llamadas: llamadasUsuario});
            }).populate('idUsuario', 'nombreUsuario')
        })

}

module.exports = {
    guardarLlamada,
    ObtenerLlamadaUsuario
}