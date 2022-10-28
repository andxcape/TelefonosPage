const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var llamadasSchema = Schema ({
    numero: Number,
    descripcion: String,
    solucion: String,
    horaInicio: String,
    horaFin: String,
    tipo: String,
    finalizada: Boolean,
    idUsuario:{type:Schema.Types.ObjectId, ref:'usuarios'},
});

module.exports = mongoose.model('llamadas', llamadasSchema);