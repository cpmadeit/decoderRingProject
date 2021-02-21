const substitutionModule = require("../src/substitution.js");
const expect = require("chai").expect;

describe("subsitution()", () => {
  describe("error handling", () => {
    it("should return false if the subsitution alphabet is missing", () => {
      const actual = substitutionModule("thinkful");
      const expected = false;
      expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const actual = substitutionModule("thinkful", "short");
      const expected = false;
      expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const actual = substitutionModule(
        "thinkful",
        "abcabcabcabcabcabcabcabcab"
      );
      const expected = false;
      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const actual = substitutionModule(
        "message",
        "plmoknijbuhvygctfxrdzeswaq"
      );
      const expected = "ykrrpik";
      expect(actual).to.eql(expected);
    });
    it("should work with any kind of key with unique characters", () => {
      const actual = substitutionModule(
        "message",
        ".waeszrdxtfcygvuhbijnokmpl"
      );
      const expected = "ysii.rs";
      expect(actual).to.eql(expected);
    });
    it("should preserve spaces", () => {
      const actual = substitutionModule(
        "my message",
        ".waeszrdxtfcygvuhbijnokmpl"
      );
      const expected = "yp ysii.rs";
      expect(actual).to.eql(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const actual = substitutionModule(
        "ykrrpik",
        "plmoknijbuhvygctfxrdzeswaq",
        false
      );
      const expected = "message";
      expect(actual).to.eql(expected);
    });
    it("should work with any kind of key with unique chracters", () => {
      const actual = substitutionModule(
        "ysii.rs",
        ".waeszrdxtfcygvuhbijnokmpl",
        false
      );
      const expected = "message";
      expect(actual).to.eql(expected);
    });
    it("should preserve spaces", () => {
      const actual = substitutionModule(
        "yp ysii.rs",
        ".waeszrdxtfcygvuhbijnokmpl",
        false
      );
      const expected = "my message";
      expect(actual).to.eql(expected);
    });
  });
});
