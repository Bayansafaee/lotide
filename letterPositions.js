// const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = (str) => {
  const results = {};
  let count = 0;
  const strMod = str.replace(/\s+/g, '');
  for (const letter of strMod) {
    if (results[letter]) {
      results[letter].push(count);
    } else {
      results[letter] = [count];
    }
    count ++;
  }
  return results;
};


// const string1 = "hello there";
// const result1 = letterPositions(string1);

// assertArraysEqual(result1.h, [0, 6]);
// assertArraysEqual(result1.e, [1, 7, 9]);
// assertArraysEqual(result1.l, [2, 3]);
// assertArraysEqual(result1.o, [4]);
// assertArraysEqual(result1.t, [5]);
// assertArraysEqual(result1.r, [8]);

module.exports = letterPositions;