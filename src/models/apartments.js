
const mongoose = require( 'mongoose' );

const apartmentSchema = mongoose.Schema({
    ambientes: {
        type: String
    },
    baños:{
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
});

module.exports = mongoose.model( 'vivienda',viviendaSchema);