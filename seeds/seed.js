const { createVerbObject } = require('../classes/AllVerbs');
const data = require('../data.js');

exports.seed = function(knex) {
  return knex('verbs').del()
    .then(function () {
      const verbsWithConjugations = data.map(({dictionary_form, type}) => {
        return createVerbObject({dictionary_form, type}).all;
      });
      return knex('verbs').insert(verbsWithConjugations);
    });
};
