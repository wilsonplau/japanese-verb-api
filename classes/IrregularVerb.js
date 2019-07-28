const Verb = require("./Verb.js");

class IrregularVerb extends Verb {
  constructor({ dictionary_form}) {
    super({ dictionary_form, type: "irr-verb"});
  }
  get masu_stem() {
    if (this.dictionary_form.slice(-2) === "する") return this.dictionary_form.slice(0, -2) +　"し"
    if (this.dictionary_form.slice(-2) === "来る") return this.dictionary_form.slice(0, -2) +　"き"
    if (this.dictionary_form.slice(-2) === "くる") return this.dictionary_form.slice(0, -2) +　"き"
  }
  get te_form() {
    if (this.dictionary_form.slice(-2) === "する") return this.dictionary_form.slice(0, -2) +　"して"
    if (this.dictionary_form.slice(-2) === "来る") return this.dictionary_form.slice(0, -2) +　"きて"
    if (this.dictionary_form.slice(-2) === "くる") return this.dictionary_form.slice(0, -2) +　"きて"
  }
  get short_present_negative_form() {
    if (this.dictionary_form.slice(-2) === "する") return this.dictionary_form.slice(0, -2) +　"しない"
    if (this.dictionary_form.slice(-2) === "来る") return this.dictionary_form.slice(0, -2) +　"こない"
    if (this.dictionary_form.slice(-2) === "くる") return this.dictionary_form.slice(0, -2) +　"こない"
  }
  get potential_root() {
    if (this.dictionary_form.slice(-2) === "する") return this.dictionary_form.slice(0, -2) +　"でき"
    if (this.dictionary_form.slice(-2) === "来る") return this.dictionary_form.slice(0, -2) +　"こられ"
    if (this.dictionary_form.slice(-2) === "くる") return this.dictionary_form.slice(0, -2) +　"こられ"
  }
  get conditional_ba_form() {
    if (this.dictionary_form.slice(-2) === "する") return this.dictionary_form.slice(0, -2) +　"すれば"
    if (this.dictionary_form.slice(-2) === "来る") return this.dictionary_form.slice(0, -2) +　"くれば"
    if (this.dictionary_form.slice(-2) === "くる") return this.dictionary_form.slice(0, -2) +　"くれば"
  }
  get command_form() {
    if (this.dictionary_form.slice(-2) === "する") return this.dictionary_form.slice(0, -2) +　"しろ"
    if (this.dictionary_form.slice(-2) === "来る") return this.dictionary_form.slice(0, -2) + "こい"
    if (this.dictionary_form.slice(-2) === "くる") return this.dictionary_form.slice(0, -2) +　"こい"
  }
  get volitional_form() {
    if (this.dictionary_form.slice(-2) === "する") return this.dictionary_form.slice(0, -2) +　"しよう"
    if (this.dictionary_form.slice(-2) === "来る") return this.dictionary_form.slice(0, -2) +　"こよう"
    if (this.dictionary_form.slice(-2) === "くる") return this.dictionary_form.slice(0, -2) +　"こよう"
  }
  get passive_root() {
    if (this.dictionary_form.slice(-2) === "する") return this.dictionary_form.slice(0, -2) +　"され"
    if (this.dictionary_form.slice(-2) === "来る") return this.dictionary_form.slice(0, -2) +　"こられ"
    if (this.dictionary_form.slice(-2) === "くる") return this.dictionary_form.slice(0, -2) +　"こられ"
  }
  get causative_root() {
    if (this.dictionary_form.slice(-2) === "する") return this.dictionary_form.slice(0, -2) +　"させ"
    if (this.dictionary_form.slice(-2) === "来る") return this.dictionary_form.slice(0, -2) +　"こさせ"
    if (this.dictionary_form.slice(-2) === "くる") return this.dictionary_form.slice(0, -2) +　"こさせ"
  }
  get causative_passive_root() {
    if (this.dictionary_form.slice(-2) === "する") return this.dictionary_form.slice(0, -2) +　"させられ"
    if (this.dictionary_form.slice(-2) === "来る") return this.dictionary_form.slice(0, -2) +　"こさせられ"
    if (this.dictionary_form.slice(-2) === "くる") return this.dictionary_form.slice(0, -2) +　"こさせられ"
  }
}

module.exports = IrregularVerb;