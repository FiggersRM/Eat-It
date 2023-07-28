// import models here

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
  }
};

module.exports = resolvers;
