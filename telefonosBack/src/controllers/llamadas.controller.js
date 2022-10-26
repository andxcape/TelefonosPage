const Llamadas = require('../models/llamadas.model');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt');

function agregarLlamada(req, res) {
    var parametros = req.body;
    var llamadasModel = new Llamadas();

    if (parametros.numero) {
        llamadasModel.numero = parametros.numero;
        llamadasModel.descripcion = parametros.descripcion;
        llamadasModel.solucion = parametros.solucion;
        sucursalModel.idEmpresa = req.user.sub; 

    Sucursales.find({ nombreSucursal: parametros.nombreSucursal,direccionSucursal:parametros.direccionSucursal,idEmpresa:req.user.sub},
        (err, sucursalGuardada) => {
        if (sucursalGuardada.length==0) {
            sucursalModel.save((err, sucGuardada) => {
                console.log(err)
                if (err) return res.status(500).send({ message: "error en la peticion" });
                if (!sucGuardada) return res.status(404).send({ message: "No se puede agregar una sucursal" });
                return res.status(200).send({ sucursales: sucGuardada  });
            })  
        } else {
            return res.status(500).send({ message: 'sucursal existente' });
        }
    })
    }else {
        return res.status(500).send({ message: "error" })
    }
}

module.exports = {

}