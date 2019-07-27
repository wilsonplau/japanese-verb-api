const RuVerb = require('../classes/RuVerb');
const UVerb = require('../classes/UVerb');
const IrregularVerb = require('../classes/IrregularVerb');

const resolvers = {
  Query: {
    find: (_, { query }) => {

    },
    conjugate: (_, { verb }) => {
      const verbObj = new UVerb({dictionary_form: verb});
      return verbObj;
    }
  },
  Mutation: {
    add: (_, { dictionary_form, type }) => {

    }
  }
};

module.exports = { resolvers }