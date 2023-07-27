const db = require('../config/connection');
const { Menu } = require('../models');

const menuData = require('./menuData.json');

db.once('open', async () => {
  await Menu.deleteMany({});

  const menus = await Menu.insertMany(menuData);

  console.log('Menus seeded!');
  process.exit(0);
});
