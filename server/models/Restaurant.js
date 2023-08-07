const { Schema, model } = require("mongoose");
const menuSchema = require("./Menu");

const restaurantSchema = new Schema({
  name: {
    type: String,
    // required: true,
    // unique: true,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  // [{type: Schema.Types.ObjectId, ref: "Address"}],
  menu: [menuSchema],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
