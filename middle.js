// const assertArraysEqual = require('./assertArraysEqual');

const middle = (arr) => {
  let arrMid = [];
  if (arr.length < 3) {
    return arrMid = [];
  } else if (arr.length % 2 !== 0) {
    arrMid.push(Math.floor(arr.length / 2) + 1);
    return arrMid;
  } else {
    arrMid.push(Math.floor(arr.length / 2));
    arrMid.push(Math.floor(arr.length / 2) + 1);
    return arrMid;
  }
};

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

module.exports = middle;