const Verb = require("./Verb.js");

class SuruVerb extends Verb {
  constructor({ dictionary_form }) {
    super({ dictionary_form, type: "suru-verb"});
  }
  get masu_stem() { return this.dictionary_form.slice(0, -2) +　"し" }
  get te_form() { return this.dictionary_form.slice(0, -2) +　"して" }
  get short_present_negative_form() { return this.dictionary_form.slice(0, -2) +　"しない" }
  get potential_root() { return this.dictionary_form.slice(0, -2) +　"でき" }
  get conditional_ba_form() { return this.dictionary_form.slice(0, -2) +　"すれば" }
  get command_form() { return this.dictionary_form.slice(0, -2) +　"しろ" }
  get volitional_form() { return this.dictionary_form.slice(0, -2) +　"しよう" }
  get passive_root() { return this.dictionary_form.slice(0, -2) +　"され" }
  get causative_root() { return this.dictionary_form.slice(0, -2) +　"させ" }
  get causative_passive_root() { return this.dictionary_form.slice(0, -2) +　"させられ" }
}

module.exports = SuruVerb;