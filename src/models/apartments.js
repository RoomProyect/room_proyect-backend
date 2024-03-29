const mongoose = require( 'mongoose' );
const mongoosePaginate = require( 'mongoose-paginate-v2' );

const apartmentSchema = mongoose.Schema({

    ambientes: {
        type: String
    },
    baños:{
        type: String
    },
    userId: {
        type: String
    },
    provincias: {
        type: Object
    },
    cochera: {
        type: String
    },
    descripcion: {
        type: String
    },
    img: {
        type: Array
    },
    mcTerreno: {
        type: String
    },
    precio: {
        type: Number
    },    
    titulo: {
        type: String
    },
    tipoDeVivienda: {
        type: String
    },
    habitaciones: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    },
    latitud: {
        type: String,
    },
    longitud: {
        type: String
    },
    owner: {
        type: String
    }
});

apartmentSchema.plugin( mongoosePaginate );

module.exports = mongoose.model( 'vivienda', apartmentSchema);

// &precio[min]=100&precio[max]=400