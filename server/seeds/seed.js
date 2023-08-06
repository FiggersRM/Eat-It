const db = require('../config/connection');
const { Menu, User, Restaurant } = require('../models');

const menuData = require('./menuData.json');
const userData = require("./userData.json");
const restaurantData = require("./restaurantData")

db.once('open', async () => {
  await Menu.deleteMany({});
  await User.deleteMany({});
  await Restaurant.deleteMany({});

  const menus = await Menu.insertMany(menuData);
  const users = await User.insertMany(userData);
  const restaurant = await Restaurant.insertMany(restaurantData);

  console.log('Menus seeded!');
  console.log("Users seeded!");
  console.log("Restaurant seeded!");
  process.exit(0);
});
