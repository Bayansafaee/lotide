// const assertArraysEqual = require('./assertArraysEqual');

// const map = (array, callback) => {
//   const results = [];
//   for (const item of array) {
//     results.push(callback(item));
//   }
//   return results;
// };

const map = (array, callback) => {
  const results = [];
  array.forEach(item => results.push(callback(item)));
  return results;
};


// const words = ["ground", "control", "to", "major", "tom"];
// const numbers = [1, 2, 3, 4, 5, 6];

// assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
// assertArraysEqual(map(numbers, x => x * 2), [2, 4, 6, 8, 10, 12]);
// assertArraysEqual(map(numbers, x => x % 2), [1, 0, 1, 0, 1, 0]);

module.exports = map;