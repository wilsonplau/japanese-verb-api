exports.up = function(knex) {
  return knex.schema.createTable("verbs", (t) => {
    t.increments()
      .index();

    t.string("dictionary_form", 25)
      .unique()
      .notNullable()
      .index();

    t.string("type", 25);
    t.string("masu_stem", 25);
    t.string("te_form", 25);
    t.string("te_nakute_form", 25);
    t.string("te_naide_form", 25);
    t.string("polite_present_form", 25);
    t.string("polite_present_negative_form", 25);
    t.string("polite_past_form", 25);
    t.string("polite_past_negative_form", 25);
    t.string("short_present_form", 25);
    t.string("short_present_negative_form", 25);
    t.string("short_past_form", 25);
    t.string("short_past_negative_form", 25);
    t.string("tai_present_form", 25);
    t.string("tai_present_negative_form", 25);
    t.string("tai_past_form", 25);
    t.string("tai_past_negative_form", 25);
    t.string("potential_short_present_form", 25);
    t.string("potential_short_present_negative_form", 25);
    t.string("potential_short_past_form", 25);
    t.string("potential_short_past_negative_form", 25);
    t.string("potential_polite_present_form", 25);
    t.string("potential_polite_present_negative_form", 25);
    t.string("potential_polite_past_form", 25);
    t.string("potential_polite_past_negative_form", 25);
    t.string("conditional_ba_form", 25);
    t.string("conditional_ba_negative_form", 25);
    t.string("conditional_tara_form", 25);
    t.string("conditional_tara_negative_form", 25);
    t.string("volitional_form", 25);
    t.string("polite_volitional_form", 25);
    t.string("polite_imperative_form", 25);
    t.string("casual_imperative_form", 25);
    t.string("command_form", 25);
    t.string("command_negative_form", 25);
    t.string("passive_short_present_form", 25);
    t.string("passive_short_present_negative_form", 25);
    t.string("passive_short_past_form", 25);
    t.string("passive_short_past_negative_form", 25);
    t.string("passive_polite_present_form", 25);
    t.string("passive_polite_present_negative_form", 25);
    t.string("passive_polite_past_form", 25);
    t.string("passive_polite_past_negative_form", 25);
    t.string("causative_short_present_form", 25);
    t.string("causative_short_present_negative_form", 25);
    t.string("causative_short_past_form", 25);
    t.string("causative_short_past_negative_form", 25);
    t.string("causative_polite_present_form", 25);
    t.string("causative_polite_present_negative_form", 25);
    t.string("causative_polite_past_form", 25);
    t.string("causative_polite_past_negative_form", 25);
    t.string("causative_passive_short_present_form", 25);
    t.string("causative_passive_short_present_negative_form", 25);
    t.string("causative_passive_short_past_form", 25);
    t.string("causative_passive_short_past_negative_form", 25);
    t.string("causative_passive_polite_present_form", 25);
    t.string("causative_passive_polite_present_negative_form", 25);
    t.string("causative_passive_polite_past_form", 25);
    t.string("causative_passive_polite_past_negative_form", 25);

    t.timestamp("created_at")
      .notNullable() 
      .defaultTo(knex.fn.now());
      
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("verbs");
};