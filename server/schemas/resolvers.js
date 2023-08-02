// import models here
const { AuthenticationError } = require('apollo-server-express');
const { User, Menu, Address, Restaurant } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // find one user
    user: async (parent, args) => {
      return await User.findOne({ _id: args.id });
    },
    //find one restaurant
    restaurant: async (parent, args) => {
        return await Restaurant.findOne({ _id: args.id }).populate('menuitems');
    },
    // find one menu item
    menuitem: async (parent, args) => {
        return await MenuItems.findOne({ _id: args.id }).populate('restaurant');
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
      const token = signToken(user)

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
