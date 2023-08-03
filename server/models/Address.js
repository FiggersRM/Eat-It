const { Schema, model } = require('mongoose');

const addressSchema = new Schema({
    address: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    zipcode: {
        type: Number,
        required: true,
        trim: true
    }
});

const Address = model('Address', addressSchema);

module.exports = Address;
