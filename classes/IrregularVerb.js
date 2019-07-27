const Verb = require("./Verb");

class IrregularVerb extends Verb {
  constructor({ dictionary_form}) {
    super({ dictionary_form, type: "irr-verb"});
  }
}

module.exports = IrregularVerb;