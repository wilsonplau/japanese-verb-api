const VerbModel = require('../models/VerbModel.js');

const resolvers = {
  Query: {
    find: async (_, { query }) => {
      const response = await VerbModel.find({ query });
      console.log(response);
      return response[0];
    },
    conjugate: (_, { verb }) => {
    }
  },
  Mutation: {
    add: (_, { dictionary_form, type }) => {

    }
  }
};

module.exports = { resolvers }