const { Schema, model } = require('mongoose');

const menuSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  restaurant: [
    {
        type: Schema.Types.ObjectId,
        ref: "Restaurant"
    }
]
});

const Menu = model('Menu', menuSchema);

module.exports = Menu;
