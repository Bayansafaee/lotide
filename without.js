// const assertArraysEqual = require('./assertArraysEqual');

const without = (source, itemsToRemove) => {
  const newArr = source.filter(element => {
    if (!itemsToRemove.includes(element)) {
      return true;
    }
  });
  return newArr;
};

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without(["1", "2", "3"], ["1", "2", "3"]), []);


// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;