const caesarModule = (function () {
  const cAlpha = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  const lettersArray = Object.keys(cAlpha);

  function convertLetterToNumber(char) {
    const number = cAlpha[char];
    if (!number) {
      return char;
    }
    return number;
  }

  function wrapNumber(number) {
    if (number < 1) {
      return number + 26;
    }
    if (number > 26) {
      return number - 26;
    }
    return number;
  }

  function convertNumToLetter(number) {
    if (typeof number === "number") {
      const wrappedNumbers = wrapNumber(number);
      const newLetter = lettersArray[wrappedNumbers - 1];
      return newLetter;
    } else {
      return number;
    }
  }

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    const lowerCaseInput = input.toLowerCase();
    const splitMessage = lowerCaseInput.split("");
    const messageToNums = splitMessage.map(convertLetterToNumber);

    const shiftMessage = messageToNums.map((char) => {
      if (char >= 1 && char <= 26) {
        return char + (encode ? shift : -shift);
      } else {
        return char;
      }
    });

    if (encode) {
      const encodedMessage = shiftMessage.map(convertNumToLetter);
      return encodedMessage.join("");
    }
    const decodedMessage = shiftMessage.map(convertNumToLetter);
    return decodedMessage.join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
