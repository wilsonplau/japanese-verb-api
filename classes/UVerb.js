const Verb = require("./Verb.js");

class UVerb extends Verb {
  constructor({ dictionary_form}) {
    super({ dictionary_form, type: "u-verb" });
  }
}

module.exports = UVerb;