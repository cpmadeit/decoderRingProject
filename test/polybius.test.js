const polybiusModule = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius()", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const actual = polybiusModule("thinkful");
      const expected = "4432423352125413";
      expect(actual).to.eql(expected);
    });
    it("should translate both 'i' and 'j' to 42", () => {
      const actual = polybiusModule("jinx");
      const expected = "42423335";
      expect(actual).to.eql(expected);
    });
    it("should leave space as is", () => {
      const actual = polybiusModule("hello world");
      const expected = "3251131343 2543241341";
      expect(actual).to.eql(expected);
    });
  });
  describe("decoding a message", () => {
    it("should decode a message by translating each pairs of numbers into a letter", () => {
      const actual = polybiusModule("23513434112251", false);
      const expected = "message";
      expect(actual).to.equal(expected);
    });
    it("should translate 42 to both 'i' and 'j'", () => {
      const actual = polybiusModule("424222221351", false);
      const expected = "i/ji/jggle";
      expect(actual).to.equal(expected);
    });
    it("should leave space as is", () => {
      const actual = polybiusModule("2345 23513434112251", false);
      const expected = "my message";
      expect(actual).to.equal(expected);
    });
    it("should return false if the length of all numbers is odd", () => {
      const actual = polybiusModule("2345 235134341122514", false);
      const expected = false;
      expect(actual).to.be.false;
    });
  });
});
