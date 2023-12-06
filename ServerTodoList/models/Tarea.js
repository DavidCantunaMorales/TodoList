const mongoose = require('mongoose');


const TareaSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: String,
        required: true
    },
    fechaVencimiento: {
        type: String,
        required: true
    },
    completada: {
        type: String,
        required: true   
    }
});

module.exports = mongoose.model('Tarea', TareaSchema)