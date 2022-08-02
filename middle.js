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

module.exports = middle;