const VerbModel = require('../models/VerbModel.js');
const { createVerbObject } = require('../classes/AllVerbs');

const resolvers = {
  Query: {
    search: async (_, { query }) => {
      const response = await VerbModel.search({ query });
      let queried_form; 
      for (const conjugation of Object.entries(response)) {
        if (conjugation[1] === query) {
          queried_form = conjugation[0];
          break;
        }
      }
      return {
        ...response,
        queried_form
      }
    },
    conjugate: async (_, { verb, type }) => {
      if (type) return createVerbObject({dictionary_form: verb, type}).all;
      const response = await VerbModel.find({ dictionary_form: verb });
      return response;
    }
  },
  Mutation: {
    create: async (_, { dictionary_form, type }) => {
      const existingVerb = await VerbModel.find({ dictionary_form });
      if (existingVerb) return { verb: existingVerb, success: false };
      const newVerb = await VerbModel.create({dictionary_form, type})
      return { verb: newVerb, success: true };
    },
    update: async (_, { target, dictionary_form, type}) => {
      const existingVerb = await VerbModel.find({ dictionary_form: target });
      if (existingVerb === undefined) return { verb: null, success: false };
      const updatedVerb = await VerbModel.update({target, dictionary_form, type});
      return { verb: updatedVerb, success: true };
    },
    delete: async (_, { target }) => {
      const existingVerb = await VerbModel.find({ dictionary_form: target });
      if (existingVerb === undefined) return false;
      await VerbModel.delete({ target });
      return true;
    }
  }
};

module.exports = { resolvers }