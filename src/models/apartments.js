const mongoose = require( 'mongoose' );

const apartmentSchema = mongoose.Schema({

    ambientes: {
        type: String
    },
    baños:{
        type: String
    },
    ciudad: {
        type: String
    },
    cochera: {
        type: String
    },
    descripcion: {
        type: String
    },
    img: {
        type: String
    },
    mcTerreno: {
        type: String
    },
    precio: {
        type: String
    },    
    titulo: {
        type: String
    },
    tipoDeVivienda: {
        type: String
    },
    habitaciones: {
        type: String
    }
});

module.exports = mongoose.model( 'vivienda', apartmentSchema);