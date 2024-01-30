const mongoose = require( 'mongoose' );
const mongoosePaginate = require( 'mongoose-paginate-v2' );

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
    },
    apartments: {
        type: Array
    }
});

userSchema.plugin( mongoosePaginate );

module.exports = mongoose.model( 'User',userSchema );