const { RuVerb, UVerb, IrregularVerb, SuruVerb, Verb } = require('../classes/AllVerbs');

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
        let verb;
        switch (type) {
          case "ru-verb":
            verb = new RuVerb({dictionary_form});
            break;
          case "u-verb":
            verb = new UVerb({dictionary_form});
            break;
          case "irr-verb":
            verb = new IrregularVerb({dictionary_form});
            break;
          case "suru-verb":
            verb = new SuruVerb({dictionary_form});
            break;
          default:
            verb = new Verb({dictionary_form, type});
            break;
        }
        return verb.all
      });
      return knex('verbs').insert(verbsWithConjugations);
    });
};
