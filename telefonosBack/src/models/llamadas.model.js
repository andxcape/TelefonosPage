const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var llamadasSchema = Schema ({
    horaInicio: Date,
    horaFin: Date
});

module.exports = mongoose.model('llamadas', llamadasSchema);