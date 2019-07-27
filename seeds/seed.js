
exports.seed = function(knex) {
  return knex('verbs').del()
    .then(function () {
      return knex('verbs').insert([
        {id: 1, dictionary_form: '食べる', type: "ru-verb"},
        {id: 2, dictionary_form: '勉強する', type: "suru-verb"},
        {id: 3, dictionary_form: '帰る', type: "u-verb"}
      ]);
    });
};
