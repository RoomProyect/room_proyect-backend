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
    age: {
        type: Number,
    },
    rol: {
        type: String,
        default: 'user',
        required: true,
    },
    averageRating: {
        type: Number
    },
    active: {
        type: Boolean,
        default: true
    },
    review: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model( 'User',userSchema );