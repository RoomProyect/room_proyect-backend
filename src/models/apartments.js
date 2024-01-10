const mongoose = require( 'mongoose' );

const apartmentSchema = mongoose.Schema({
    title: {
        type: String
    },
    city:{
        type: String
    },
    country: {
        type: String
    },
    description: {
        type: String
    },
    qualification: {
        type: Number,
        validate: {
            validator: function(value) {
              return value >= 0.00 && value <= 5.00;
            },
            message: 'La calificación debe estar entre 0.00 y 5.00'
        }
    },
    rooms:{
        type: Number
    },
    beds:{
        type: Number
    },
    bathrooms: {
        type: Number
    },
    guests: {
        type: Number
    },
    //boolean data
    wifi:{
        type: Boolean
    },
    parking: {
        type: Boolean
    },
    washing_machine:{
        type: Boolean
    },
    carbon_monoxide_detector:{
        type: Boolean
    },
    kitchen: {
        type: Boolean
    },
    work_zone: {
        type: Boolean
    },
    television: {
        type: Boolean,
    },
    air_conditioning: {
        type: Boolean
    },
    smoke_detector:{
        type: Boolean
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    }
});

module.exports = mongoose.model( 'Apartment', apartmentSchema );