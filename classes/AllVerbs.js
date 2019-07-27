const Verb = require("./Verb.js");
const RuVerb = require("./RuVerb.js");
const UVerb = require("./UVerb.js");
const SuruVerb = require("./SuruVerb.js");
const IrregularVerb = require("./IrregularVerb.js");

module.exports = {
  Verb, RuVerb, UVerb, SuruVerb, IrregularVerb,  
  createVerbObject: ({ dictionary_form, type }) => {
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
    return verb;
  }
} 