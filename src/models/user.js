const mongoose = require( 'mongoose' );

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    rol: {
        type: String,
        required: true,
    },
    averageRating: {
        type: Number
    }
});

module.exports = mongoose.model( 'User',userSchema );