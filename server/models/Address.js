const { Schema, model } = require('mongoose');
const Restaurant = require("./Restaurant")
const Menu = require("./Menu")

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
    },
    restaurant: [
        {
            type: Schema.Types.ObjectId,
            ref: "Restaurant"
        }
    ]
});

const Address = model('Address', addressSchema);

module.exports = Address;
