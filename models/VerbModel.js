const { RuVerb, UVerb, IrregularVerb, SuruVerb, Verb } = require('../classes/AllVerbs');
const allForms = require('../helpers/all_forms');
const config = require("../knexfile.js");
const knex = require("knex")(config);

const VerbModel = {
  create: async ({ dictionary_form, type }) => {
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
    return knex("verbs").insert(verb.all)
      .then((response) => { return response })
      .catch((error) => console.log(error.detail));
  },
  find: async ({ query }) => {
    const allColumns = `${allForms.map((column_name) => `${column_name} = '${query}'`).join(" OR ")}`;
    return knex.raw(`SELECT dictionary_form, type FROM verbs WHERE ${allColumns};`)
      .then((response) => { return response.rows })
      .catch((error) => console.log(error.detail));
  },
}

module.exports = VerbModel;