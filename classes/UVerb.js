const Verb = require("./Verb");

class UVerb extends Verb {
  constructor({ dictionary_form}) {
    super({ dictionary_form, type: "u-verb"});
  }
}

module.exports = UVerb;