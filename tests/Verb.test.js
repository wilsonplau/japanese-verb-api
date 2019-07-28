const chai = require('chai');
const expect = chai.expect;
const url = `http://localhost:4000`;
const request = require('supertest')(url);

const config = require("../knexfile.js");
const knex = require("knex")(config);
const { createVerbObject } = require('../classes/AllVerbs');

describe("Japanese Verb GraphQL Server", () => {  

  beforeEach(async () => {
    await knex('verbs').del();
    const testData = require('./TestData.js')
    const verbsWithConjugations = testData.map(({dictionary_form, type}) => {
      return createVerbObject({dictionary_form, type}).all;
    });
    await knex('verbs').insert(verbsWithConjugations);
  })

  describe("Conjugation requests", () => {
    it('Should conjugate a verb that exists the database', (done) => {
      request.post('/graphql')
      .send({ query: `query { conjugate (verb: "食べる") { type dictionary_form potential_polite_present_form }}`})
      .expect(200)
      .end((err,res) => {
        if (err) return done(err);
        expect(res.body.data.conjugate.type).to.equal("ru-verb");
        expect(res.body.data.conjugate.potential_polite_present_form).to.equal("食べられます");
        done(); 
      })
    });
    it('Should be able to conjugate any phrase if passed a verb and type, even if not in the DB', (done) => {
      request.post('/graphql')
      .send({ query: `query { conjugate (verb: "遊ぶ", type: "u-verb") { type dictionary_form short_past_form }}`})
      .expect(200)
      .end((err,res) => {
        if (err) return done(err);
        expect(res.body.data.conjugate.type).to.equal("u-verb");
        expect(res.body.data.conjugate.dictionary_form).to.equal("遊ぶ");
        expect(res.body.data.conjugate.short_past_form).to.equal("遊んだ");
        done();
      })
    });
    it('Should return null if not found and type is not provided', (done) => {
      request.post('/graphql')
      .send({ query: `query { conjugate (verb: "遊ぶ") { type dictionary_form short_past_form }}`})
      .expect(200)
      .end((err,res) => {
        if (err) return done(err);
        expect(res.body.data.conjugate).to.equal(null);
        done();
      })
    });
  })

  describe("Search requests", () => {
    it('Should find a verb and return its dictionary form and type', (done) => {
      request.post('/graphql')
      .send({ query: `query { search (query: "食べた") { type dictionary_form queried_form }}`})
      .expect(200)
      .end((err,res) =>  {
        if (err) return done(err);
        expect(res.body.data.search.dictionary_form).to.equal("食べる");
        expect(res.body.data.search.queried_form).to.equal("short_past_form");
        expect(res.body.data.search.type).to.equal("ru-verb");
        done();
      })
    });
    it('Should find return null if not found', (done) => {
      request.post('/graphql')
      .send({ query: `query { search (query: "食べえの") { type dictionary_form queried_form }}`})
      .expect(200)
      .end((err,res) => {
        if (err) return done(err);
        expect(res.body.data.search).to.equal(null);
        done();
      })
    });
  })

  describe("Mutations", () => {
    it('Can add a new verb to the database', (done) => {
      request.post('/graphql')
      .send({ query: `mutation { create (dictionary_form: "連れて行く", type: "u-verb") { success verb { type dictionary_form }}}`})
      .expect(200)
      .end((err,res) => {
        if (err) return done(err);
        expect(res.body.data.create.success).to.be.true;
        expect(res.body.data.create.verb.dictionary_form).to.equal("連れて行く");
        expect(res.body.data.create.verb.type).to.equal("u-verb");
        done();
      })
    });
    it('should not re-create existing verbs', (done) => {
      request.post('/graphql')
      .send({ query: `mutation { create (dictionary_form: "食べる", type: "ru-verb") { success verb { type dictionary_form }}}`})
      .expect(200)
      .end((err,res) => {
        if (err) return done(err);
        expect(res.body.data.create.success).to.be.false;
        expect(res.body.data.create.verb.dictionary_form).to.equal("食べる");
        expect(res.body.data.create.verb.type).to.equal("ru-verb");
        done();
      })
    });
    it('should update an existing verb in the database', (done) => {
      request.post('/graphql')
      .send({ query: `mutation { update (target: "飲む", type: "u-verb") { success verb { type dictionary_form polite_present_form }}}`})
      .expect(200)
      .end((err,res) => {
        if (err) return done(err);
        expect(res.body.data.update.success).to.be.true;
        expect(res.body.data.update.verb.dictionary_form).to.equal("飲む");
        expect(res.body.data.update.verb.polite_present_form).to.equal("飲みます");
        expect(res.body.data.update.verb.type).to.equal("u-verb");  
        done();
      })
    });
    it('should delete an existing verb in the database', (done) => {
      request.post('/graphql')
      .send({ query: `mutation { delete (target: "帰る") }`})
      .expect(200)
      .end((err,res) => {
        if (err) return done(err);
        expect(res.body.data.delete).to.be.true;
        done();
      })
    });
    it("should return false on delete if verb doesn't exist", (done) => {
      request.post('/graphql')
      .send({ query: `mutation { delete (target: "混む") }`})
      .expect(200)
      .end((err,res) => {
        if (err) return done(err);
        expect(res.body.data.delete).to.be.false;
        done();
      })
    });
  })

})  