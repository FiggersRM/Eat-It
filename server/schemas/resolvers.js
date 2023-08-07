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
    restaurants: async (parents, args) => {
      return await Restaurant.find({}).populate('menu')
    },
    //find one restaurant
    restaurant: async (parent, args) => {
        return await Restaurant.findOne({ _id: args.id }).populate('menu');
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
    updateMenu: async (parent, { id, price }) => {
      const decrement = Math.abs(price) * -1

      return Menu.findByIdAndUpdate(
        id,
        { $inc: { price: decrement } },
        { new: true }
      )
    },
    addRestaurant: async (parent, args) => {
      console.log(args);
      const restaurant = await Restaurant.create(args);
      return restaurant
    },
    addMenu: async (parent, args) => {
      const menu = await Menu.create(args)
      return menu
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
