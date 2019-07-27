const Verb = require("./Verb.js");

class SuruVerb extends Verb {
  constructor({ dictionary_form }) {
    super({ dictionary_form, type: "suru-verb"});
  }
}

module.exports = SuruVerb;