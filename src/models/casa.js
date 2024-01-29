const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const viviendaSchema = new Schema({
    mc_Casa: {
        type: Number,
        required: true,
    },
    mc_Terreno: {
        type: Number,
        required: true,
    },
    ambientes: {
        type: Number,
    },
    baños: {
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
    ciudad: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model( 'Vivienda',viviendaSchema);