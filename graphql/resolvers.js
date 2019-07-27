const VerbModel = require('../models/VerbModel.js');

const resolvers = {
  Query: {
    search: async (_, { query }) => {
      const response = await VerbModel.search({ query });
      console.log(response);
      return response[0];
    },
    conjugate: async (_, { verb }) => {
      const response = await VerbModel.find({ dictionary_form: verb });
      console.log(response);
      return response;
    }
  },
  Mutation: {
    add: (_, { dictionary_form, type }) => {

    }
  }
};

module.exports = { resolvers }