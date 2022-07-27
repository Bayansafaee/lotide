const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

// assertArraysEqual([1, 2, 3], [1, 2, 3]) // => should PASS
// assertArraysEqual([1, 2, 3], [3, 2, 1]) // => should FAIL
// assertArraysEqual([1, 2], [1, 2, 3]) // => should FAIL

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => should PASS
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => should FAIL
// assertArraysEqual(["1", "2"], ["1", "2", "3"]) // => should FAIL

module.exports = assertArraysEqual;