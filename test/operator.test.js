const chai = require("chai");
const operator = require("../src/operator");
const sum = operator.sum;
const expect = chai.expect;
const should = chai.should();

describe("operator.js Test", () => {
  describe("sum function testing", () => {
    before(() => {
      console.log("before");
    });
    beforeEach(() => {
      console.log("before each");
    });
    it("10 + 20 => 30", done => {
      let result = sum(10, 20);
      expect(result).to.equal(30);
      done();
    });
    after(() => {
      console.log("after");
    });
    afterEach(() => {
      console.log("afterEach");
    });
  });
});
