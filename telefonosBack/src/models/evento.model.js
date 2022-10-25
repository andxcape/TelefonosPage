const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventoSchema = Schema ({
    tipo: String,
    idLlamadas:{type:Schema.Types.ObjectId, ref:'llamadas'}
});

module.exports = mongoose.model('eventos', eventoSchema);