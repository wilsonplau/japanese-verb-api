exports.up = function(knex) {
  return knex.schema.createTable("verbs", (t) => {
    t.increments()
      .index();

    t.string("dictionary_form", 25)
      .unique()
      .notNullable()
      .index();

    t.timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());
      
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("verbs");
};