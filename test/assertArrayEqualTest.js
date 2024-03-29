const assertArrayEqual = require('../assertArrayEqual');


assertArraysEqual([1, 2, 3], [1, 2, 3]) // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => should FAIL
assertArraysEqual([1, 2], [1, 2, 3]) // => should FAIL

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => should FAIL
assertArraysEqual(["1", "2"], ["1", "2", "3"]) // => should FAIL
