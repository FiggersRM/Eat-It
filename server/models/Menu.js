const { Schema, model } = require('mongoose');

const menuSchema = new Schema({
  name: {
    type: String,
    required: true,
    // unique: false
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

// const Menu = model('Menu', menuSchema);

module.exports = menuSchema;
