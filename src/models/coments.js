const mongoose = require( 'mongoose' );

const comentsSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    qualification: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    }
});

module.exports = mongoose.model( 'Coments', comentsSchema );