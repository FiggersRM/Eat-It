// import models here
const { AuthenticationError } = require('apollo-server-express');
const { User, Menu, Address, Restaurant } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // find one user
    user: async (parent, {userId}) => {
      return await User.findOne({ _id: userId });
    },
    // find all restaurants
    restaurants: async () => {
      return await Restaurant.find({}).populate('menu');
    },
    //find one restaurant
    restaurant: async (parent, {restaurantId}) => {
        return await Restaurant.findOne({ _id: restaurantId }).populate('menu');
    },
    // find restaurants associated with one user
    userRestaurant: async (parent, args) => {
        return await Restaurant.find({ user: args.userId }).populate('menu');
    },
    // find one menu item
    menu: async (parent, args) => {
        return await Menu.findOne({ _id: args.id }).populate('restaurant');
    },
    // find one address
    address: async (parent, args) => {
        return await Address.findOne({ _id: args.id /*maybe change this parameter*/})
    }
  },
  Mutation: {
    //add mutations once models are complete and wew decide which mutations we need
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user }
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        })
      }

      throw new AuthenticationError("Not logged in")
    },
    deleteMenu: async (parent, { restaurantId, menuId }) => {
      const menu = Restaurant.findOneAndUpdate(
        {_id: restaurantId},
        {$pull: {menu: {_id: menuId}}},
        {new: true}
      )
      return menu;
    },
    addRestaurant: async (parent, {name, address, user}) => {
      const restaurant = await Restaurant.create({name: name, address, user});
      return restaurant;
    },
    deleteRestaurant: async (parent, {restaurantId}) => {
      const restaurant = await Restaurant.deleteOne({_id: restaurantId});
      return restaurant;
    },
    addMenu: async (parent, {restaurantId, name, price, description}) => {
      const newMenu = {name, price, description}
      const menu = await Restaurant.findOneAndUpdate(
        {_id: restaurantId},
        {$push: {menu: newMenu}},
        {new: true});
      return menu;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials")
      }

      const correctPw = await user.isCorrectPassword(password)

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials")
      }

      const token = signToken(user)

      return { token, user }
    }
  }
};

module.exports = resolvers;
