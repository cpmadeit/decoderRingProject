const polybiusModule = (function () {
  const polyAlpha = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };
  const polyNums = {};

  for (let letter in polyAlpha) {
    const num = polyAlpha[letter];
    polyNums[num] = letter;
  }

  const charToNum = (char) => {
    const num = polyAlpha[char];
    if (!num) {
      return char;
    }
    return num;
  };

  const decodeNum = (num) => {
    if (num === "42") {
      return "i/j";
    } else if (num === " ") {
      return num;
    }
    return polyNums[num];
  };

  function polybius(input, encode = true) {
    const lowerCaseInput = input.toLowerCase();
    const splitInput = lowerCaseInput.split("");
    if (encode) {
      const encoder = splitInput.map(charToNum);
      return encoder.join("");
    } else {
      let counter = [];
      splitInput.map((element) => {
        if (element !== " ") {
          counter.push(element);
        }
      });
      if (counter.length % 2 === 1) {
        return false;
      }

      let firstDigit;
      const numsToDecode = [];
      splitInput.forEach((digit) => {
        if (digit === " ") {
          numsToDecode.push(digit);
        } else if (!firstDigit) {
          firstDigit = digit;
        } else {
          numsToDecode.push(firstDigit + digit);
          firstDigit = null;
        }
      });

      const decoder = numsToDecode.map(decodeNum);
      return decoder.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
