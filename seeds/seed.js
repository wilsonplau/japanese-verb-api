const { createVerbObject } = require('../classes/AllVerbs');

exports.seed = function(knex) {
  return knex('verbs').del()
    .then(function () {
      const allVerbs = [
        {dictionary_form: '食べる', type: "ru-verb"},
        {dictionary_form: '勉強する', type: "suru-verb"},
        {dictionary_form: '帰る', type: "u-verb"},
        {dictionary_form: '返す', type: "u-verb"}
      ]
      const verbsWithConjugations = allVerbs.map(({dictionary_form, type}) => {
        return createVerbObject({dictionary_form, type}).all;
      });
      return knex('verbs').insert(verbsWithConjugations);
    });
};
