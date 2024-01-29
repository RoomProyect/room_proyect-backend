const mongoose = require( 'mongoose' );
const mongoosePaginate = require( 'mongoose-paginate-v2' );

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
    },
    active: {
        type: Boolean,
        default: true
    }
});

apartmentSchema.plugin( mongoosePaginate );

module.exports = mongoose.model( 'vivienda', apartmentSchema);

// &precio[min]=100&precio[max]=400