const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  address: {
    type: String,
    trim: true
  },
  // [{type: Schema.Types.ObjectId, ref: "Address"}],
  menu: [
    {
      type: Schema.Types.ObjectId,
      ref: "Menu"
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;
