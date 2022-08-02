const takeUntil = (array, callback) => {
  let result = [];
  const upTo = array.findIndex(callback);
  for (let i = 0; i < upTo; i++) {
    result.push(array[i]);
  }
  return result;
};

module.exports = takeUntil;