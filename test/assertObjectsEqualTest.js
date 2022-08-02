const assertObjectsEqual = require('../assertObjectsEqual');

const obj1 = {
  key1: 1,
  key2: 2,
  key3: 3,
};

const obj2 = {
  key1: 1,
  key2: 2,
  key3: 3,
};

assertObjectsEqual(obj1, obj2);

const obj3 = {
  key1: 0,
  key2: 5,
  key3: 2,
};

assertObjectsEqual(obj1, obj3);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => should PASS

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => should FAIL

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => should PASS

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => should FAIL