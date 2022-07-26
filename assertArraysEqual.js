const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${[arr1]} === ${[arr2]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[arr1]} !== ${[arr2]}`);
  }
};

// assertArraysEqual([1, 2, 3], [1, 2, 3]) // => should PASS
// assertArraysEqual([1, 2, 3], [3, 2, 1]) // => should FAIL
// assertArraysEqual([1, 2], [1, 2, 3]) // => should FAIL

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => should PASS
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => should FAIL
// assertArraysEqual(["1", "2"], ["1", "2", "3"]) // => should FAIL

module.exports = assertArraysEqual; 