const mongoose = require( 'mongoose' );

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

module.exports = mongoose.model( 'Coments', comentsSchema );