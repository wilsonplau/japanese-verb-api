const all_forms = require("../helpers/all_forms.js")

class Verb {
  constructor({ dictionary_form, type }) {
    this.dictionary_form = dictionary_form;
    this.type = type;
  }
  
  change_sound(input, sound) {
    switch (input.slice(-1)) {
      case "あ": case "い": case "う": case "え": case "お":
        if (sound === "a") return input.slice(0, -1) + "わ";
        if (sound === "i") return input.slice(0, -1) + "い";
        if (sound === "u") return input.slice(0, -1) + "う";
        if (sound === "e") return input.slice(0, -1) + "え";
        if (sound === "o") return input.slice(0, -1) + "お";
      case "か": case "き": case "く": case "け": case "こ":
        if (sound === "a") return input.slice(0, -1) + "か";
        if (sound === "i") return input.slice(0, -1) + "き";
        if (sound === "u") return input.slice(0, -1) + "く";
        if (sound === "e") return input.slice(0, -1) + "け";
        if (sound === "o") return input.slice(0, -1) + "こ";
      case "が": case "ぎ": case "ぐ": case "げ": case "ご":
        if (sound === "a") return input.slice(0, -1) + "が";
        if (sound === "i") return input.slice(0, -1) + "ぎ";
        if (sound === "u") return input.slice(0, -1) + "ぐ";
        if (sound === "e") return input.slice(0, -1) + "げ";
        if (sound === "o") return input.slice(0, -1) + "ご";
      case "さ": case "し": case "す": case "せ": case "そ":
        if (sound === "a") return input.slice(0, -1) + "さ";
        if (sound === "i") return input.slice(0, -1) + "し";
        if (sound === "u") return input.slice(0, -1) + "す";
        if (sound === "e") return input.slice(0, -1) + "せ";
        if (sound === "o") return input.slice(0, -1) + "そ";
      case "た": case "ち": case "つ": case "て": case "と":
        if (sound === "a") return input.slice(0, -1) + "た";
        if (sound === "i") return input.slice(0, -1) + "ち";
        if (sound === "u") return input.slice(0, -1) + "つ";
        if (sound === "e") return input.slice(0, -1) + "て";
        if (sound === "o") return input.slice(0, -1) + "と";
      case "だ": case "ぢ": case "づ": case "で": case "ど":
        if (sound === "a") return input.slice(0, -1) + "だ";
        if (sound === "i") return input.slice(0, -1) + "ぢ";
        if (sound === "u") return input.slice(0, -1) + "づ";
        if (sound === "e") return input.slice(0, -1) + "で";
        if (sound === "o") return input.slice(0, -1) + "ど";
      case "な": case "に": case "ぬ": case "ね": case "の":
        if (sound === "a") return input.slice(0, -1) + "な";
        if (sound === "i") return input.slice(0, -1) + "に";
        if (sound === "u") return input.slice(0, -1) + "ぬ";
        if (sound === "e") return input.slice(0, -1) + "ね";
        if (sound === "o") return input.slice(0, -1) + "の";
      case "は": case "ひ": case "ふ": case "へ": case "ほ":
        if (sound === "a") return input.slice(0, -1) + "は";
        if (sound === "i") return input.slice(0, -1) + "ひ";
        if (sound === "u") return input.slice(0, -1) + "ふ";
        if (sound === "e") return input.slice(0, -1) + "へ";
        if (sound === "o") return input.slice(0, -1) + "ほ";
      case "ば": case "び": case "ぶ": case "べ": case "ぼ":
        if (sound === "a") return input.slice(0, -1) + "ば";
        if (sound === "i") return input.slice(0, -1) + "び";
        if (sound === "u") return input.slice(0, -1) + "ぶ";
        if (sound === "e") return input.slice(0, -1) + "べ";
        if (sound === "o") return input.slice(0, -1) + "ぼ";
      case "ま": case "み": case "む": case "め": case "も":
        if (sound === "a") return input.slice(0, -1) + "ま";
        if (sound === "i") return input.slice(0, -1) + "み";
        if (sound === "u") return input.slice(0, -1) + "む";
        if (sound === "e") return input.slice(0, -1) + "め";
        if (sound === "o") return input.slice(0, -1) + "も";
      case "ら": case "り": case "る": case "れ": case "ろ":
        if (sound === "a") return input.slice(0, -1) + "ら";
        if (sound === "i") return input.slice(0, -1) + "り";
        if (sound === "u") return input.slice(0, -1) + "る";
        if (sound === "e") return input.slice(0, -1) + "れ";
        if (sound === "o") return input.slice(0, -1) + "ろ";
      default: 
        return null;
    }
  }

  get all() {
    let returnObj = {
      dictionary_form: this.dictionary_form,
      type: this.type,
    };
    all_forms.forEach((form) => {
      returnObj[form] = this[form]
    })
    return returnObj;
  }

  // STEMS
  get masu_stem() { return this.change_sound(this.dictionary_form, "i") }

  // TE FORM
  get te_form() {
    switch (this.dictionary_form.slice(-1)) {
      case "う": case "つ": case "る":
        return this.dictionary_form.slice(0, -1) + "って"
      case "む": case "ぶ": case "ぬ":
        return this.dictionary_form.slice(0, -1) + "んで"
      case "ぐ":
        return this.dictionary_form.slice(0, -1) + "いで"
      case "す":
        return this.dictionary_form.slice(0, -1) + "して"
      case "く":
        if (this.dictionary_form.slice(0, -5) === "行「い」く") return this.dictionary_form.slice(0, -5) + "行「い」って"; 
        if (this.dictionary_form.slice(0, -2) === "いく") return this.dictionary_form.slice(0, -2) + "いって";
        return this.dictionary_form.slice(0, -1) + "いて";
      default: 
        return null;
    }
  }
  get te_nakute_form() { return this.short_present_negative_form.slice(0, -1) + "くて" }
  get te_naide_form() { return this.short_present_negative_form + "で" }

  // POLITE FORM
  get polite_present_form() { return this.masu_stem + "ます"　}
  get polite_present_negative_form() {　return this.masu_stem + 'ません' }
  get polite_past_form() { return this.masu_stem + 'ました' }
  get polite_past_negative_form() {return this.masu_stem + 'ませんでした' }

  // SHORT FORM
  get short_present_form() { return this.dictionary_form }
  get short_present_negative_form() {
    if (this.dictionary_form.slice(0, -2) === "ある") return this.dictionary_form.slice(0, -2) + "ない"
    return this.change_sound(this.dictionary_form, "a") + "ない"
  }
  get short_past_form() { return this.change_sound(this.te_form, "a")}
  get short_past_negative_form() { return this.short_present_negative_form.slice(0, -1) + "かった"}

  // TAI PRESENT FORM 
  get tai_present_form() { return this.masu_stem + "たい" }
  get tai_present_negative_form() { return this.masu_stem + "たくない" }
  get tai_past_form() { return this.masu_stem + "たかった" }
  get tai_past_negative_form() { return this.masu_stem + "たくなかった" }

  // POTENTIAL FORM
  get potential_root() { 
    if (this.dictionary_form === "ある") return "ありえ";
    return this.change_sound(this.dictionary_form, "e") ;
  }
  get potential_polite_present_form() { return this.potential_root + "ます" }
  get potential_polite_present_negative_form() { return this.potential_root + "ません" }
  get potential_polite_past_form() { return this.potential_root + "ました" }
  get potential_polite_past_negative_form() { return this.potential_root + "ませんでした" }
  get potential_short_present_form() { return this.potential_root + "る" }
  get potential_short_present_negative_form() { return this.potential_root + "た" }
  get potential_short_past_form() { return this.potential_root + "ない" }
  get potential_short_past_negative_form() { return this.potential_root + "なかった" }

  // CONDITIONAL 
  get conditional_ba_form() { return this.change_sound(this.dictionary_form, "e") + "ば" }
  get conditional_ba_negative_form() { return this.short_present_negative_form.slice(0, -1) + "ければ" }
  get conditional_tara_form() { return this.short_past_form + "ら" }
  get conditional_tara_negative_form() { return this.short_past_negative_form + "ら" }

  // VOLITIONAL
  get volitional_form() { return this.change_sound(this.dictionary_form, "o") + "う"}
  get polite_volitional_form() { return this.masu_stem + "ましょう" }

  // IMPERATIVE
  get polite_imperative_form() { return this.masu_stem + "なさい" }
  get casual_imperative_form() { return this.dictionary_form + "な" }

  // COMMAND FORM
  get command_form() { return this.dictionary_form.slice(0, -1) + "ろ" }
  get command_negative_form() { return this.dictionary_form + "な" }

  // PASSIVE FORM
  get passive_root() { return this.change_sound(this.dictionary_form, "a") + "れ" }
  get passive_polite_present_form() { return this.passive_root + "ます" }
  get passive_polite_present_negative_form() { return this.passive_root + "ません" }
  get passive_polite_past_form() { return this.passive_root + "ました" }
  get passive_polite_past_negative_form() { return this.passive_root + "ませんでした" }
  get passive_short_present_form() { return this.passive_root + "る" }
  get passive_short_present_negative_form() { return this.passive_root + "た" }
  get passive_short_past_form() { return this.passive_root + "ない" }
  get passive_short_past_negative_form() { return this.passive_root + "なかった" }

  // CAUSATIVE FORM
  get causative_root() { return this.change_sound(this.dictionary_form, "a") + "せ"}
  get causative_polite_present_form() { return this.causative_root + "ます" }
  get causative_polite_present_negative_form() { return this.causative_root + "ません" }
  get causative_polite_past_form() { return this.causative_root + "ました" }
  get causative_polite_past_negative_form() { return this.causative_root + "ませんでした" }
  get causative_short_present_form() { return this.causative_root + "る" }
  get causative_short_present_negative_form() { return this.causative_root + "た" }
  get causative_short_past_form() { return this.causative_root + "ない" }
  get causative_short_past_negative_form() { return this.causative_root + "なかった" }

  // CAUSATIVE PASSIVE
  get causative_passive_root() { return this.change_sound(this.dictionary_form, "a") + "せられ" }
  get causative_passive_polite_present_form() { return this.causative_passive_root + "ます" }
  get causative_passive_polite_present_negative_form() { return this.causative_passive_root + "ません" }
  get causative_passive_polite_past_form() { return this.causative_passive_root + "ました" }
  get causative_passive_polite_past_negative_form() { return this.causative_passive_root + "ませんでした" }
  get causative_passive_short_present_form() { return this.causative_passive_root + "る" }
  get causative_passive_short_present_negative_form() { return this.causative_passive_root + "た" }
  get causative_passive_short_past_form() { return this.causative_passive_root + "ない" }
  get causative_passive_short_past_negative_form() { return this.causative_passive_root + "なかった" }

}

module.exports = Verb;