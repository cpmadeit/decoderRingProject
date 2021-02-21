const substitutionModule = (function () {
  const regAlpha = {
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

  lettersArray = Object.keys(regAlpha);

  const charToNum = (char) => {
    const num = regAlpha[char];
    if (!num) {
      return char;
    } else {
      return num;
    }
  };

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (i != j && alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }

    const lowerInput = input.toLowerCase();
    const splitAlpha = alphabet.split("");
    const splitInput = lowerInput.split("");
    let numMessage = [];
    let encodedMessage = [];
    let decodedMessage = [];
    let newChar;

    if (encode) {
      for (let i = 0; i < splitInput.length; i++) {
        const oChar = splitInput[i];
        const inputNum = charToNum(oChar);
        numMessage.push(inputNum);
      }
      const encoder = numMessage.map((num) => {
        if (typeof num === "number") {
          newChar = splitAlpha[num - 1];
        } else {
          newChar = num;
        }
        return encodedMessage.push(newChar);
      });
      return encodedMessage.join("");
    } else if (!encode) {
      let numsToDecode = [];
      const dCharToNum = (char) => {
        const num = splitAlpha.indexOf(char) + 1;
        console.log(num);
        if (!num) {
          return char;
        } else {
          return num;
        }
      };

      for (let i = 0; i < splitInput.length; i++) {
        const eChar = splitInput[i];
        const eNum = dCharToNum(eChar);
        numsToDecode.push(eNum);
      }

      const decoder = numsToDecode.map((num) => {
        if (typeof num === "number") {
          newChar = lettersArray[num - 1];
        } else {
          newChar = num;
        }
        return decodedMessage.push(newChar);
      });
      return decodedMessage.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
