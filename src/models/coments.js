const mongoose = require( 'mongoose' );
const mongoosePaginate = require( 'mongoose-paginate-v2' );

const comentsSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    userName: {
        type: String,
        required: true,
    }
});

comentsSchema.plugin( mongoosePaginate );

module.exports = mongoose.model( 'Coments', comentsSchema );