const Verb = require("./Verb.js");

class RuVerb extends Verb {
  constructor({ dictionary_form}) {
    super({ dictionary_form, type: "ru-verb"});
  }
  get masu_stem() { return this.dictionary_form.slice(0, -1) }
  get te_form() { return this.masu_stem + "て" }
  get potential_root() { return this.dictionary_form.slice(0, -1) + "られ" }
  get command_form() { return this.dictionary_form.slice(0, -1) + "ろ" }
  get volitional_form() { return this.dictionary_form.slice(0, -1) + "よう" }
  get casuative_root() { return this.dictionary_form.slice(0, -1) + "させ" }
  get casuative_passive_root() { return this.dictionary_form.slice(0, -1) + "させられ" }
}
module.exports = RuVerb;