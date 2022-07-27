// const assertEqual = require("./assertEqual");

const countLetters = (str) => {
  let results = {};
  const strMod = str.replace(/\s+/g, '');
  for (const letter of strMod) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};


// const string1 = "lighthouse in the house";
// const result1 = countLetters(string1);

// assertEqual(result1.l, 1);
// assertEqual(result1.i, 2);
// assertEqual(result1.g, 1);
// assertEqual(result1.h, 4);
// assertEqual(result1.t, 2);
// assertEqual(result1.o, 2);
// assertEqual(result1.u, 2);
// assertEqual(result1.s, 2);
// assertEqual(result1.e, 3);
// assertEqual(result1.n, 1);

module.exports = countLetters;
