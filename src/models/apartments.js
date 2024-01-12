
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const viviendaSchema = new Schema({
    mcCasa: {
        type: Number,
        required: true,
    },
    mcTerreno: {
        type: Number,
        required: true,
    },
    ambientes: {
        type: Number,
    },
    banos: {
        type: Number,
        required: true,
    },
    cochera: {
        type: Number,
    },
    dormitorio: {
        type: Number,
        required: true,
    },
    descripcion: {
        type: String,
    },
    direccion: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    piscina: {
        type: Boolean,
    },
    quincho: {
        type: Boolean,
    },
    imagen: {
        type: String,
    },
    ciudad: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    }
})

module.exports = mongoose.model( 'vivienda',viviendaSchema);