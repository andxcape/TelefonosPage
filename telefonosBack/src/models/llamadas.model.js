const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var llamadasSchema = Schema ({
    numero: String,
    descripcion: String,
    solucion: String,
    horaInicio: Date,
    horaFin: Date,
    tipo: String,
    finalizada: Boolean,
    idUsuario:{type:Schema.Types.ObjectId, ref:'usuarios'},
    jornada: Date
});

module.exports = mongoose.model('llamadas', llamadasSchema);