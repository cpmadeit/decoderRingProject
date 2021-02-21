const caesarModule = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesar()", () => {
  describe("encoding a message", () => {
    it("should return the correct message after encoding", () => {
      const actual = caesarModule("thinkful", 3);
      const expected = "wklqnixo";
      expect(actual).to.eql(expected);
    });
  });
  describe("decoding a message", () => {
    it("should return the correct message after decoding", () => {
      const actual = caesarModule("wklqnixo", 3, false);
      const expected = "thinkful";
      expect(actual).to.eql(expected);
    });
  });
  describe("error handling", () => {
    it("should return false if shift value is 0", () => {
      const actual = caesarModule("thinkful");
      expect(actual).to.be.false;
    });
    it("should return false if shift value is greater than 25", () => {
      const actual = caesarModule("thinkful", 99);
      expect(actual).to.be.false;
    });
    it("should return false if shift value is less than -25", () => {
      const actual = caesarModule("thinkful", -26);
      expect(actual).to.be.false;
    });
  });
  describe("maintaining the message", () => {
    it("should maintain spaces throughout", () => {
      const actual = caesarModule("This is a secret message!", 8);
      const expected = "bpqa qa i amkzmb umaaiom!";
      expect(actual).to.eql(expected);
    });

    it("should maintain non-alphabetic symbols throughout", () => {
      const actual = caesarModule("hello!", 2);
      const expected = "jgnnq!";
      expect(actual).to.eql(expected);
    });

    it("should ignore capital letters", () => {
      const actual = caesarModule("bpqa qa i amkzmb umaaiom!", 8, false);
      //const actual = caesarModule("BPQA QA I AMKZMB UMAAIOM!", -8, false);
      const expected = "this is a secret message!";
      expect(actual).to.eql(expected);
    });

    it("should return shifts that wrap around the alphabet", () => {
      const actual = caesarModule("rocketbook", -1);
      const expected = "qnbjdsannj";
      expect(actual).to.eql(expected);
    });
  });
});
