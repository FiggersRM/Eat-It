const { Schema, model } = require('mongoose');
const Menu = require("./Menu")
const Address = require("./Address")

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  address: [
    {
      type: Schema.Types.ObjectId,
      ref: "Address"
    }
  ],
  menu: [
    {
      type: Schema.Types.ObjectId,
      ref: "Menu"
    }
  ]
});

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;
