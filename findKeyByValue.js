const findKeyByValue = (obj, val) => {
  for (const key of Object.keys(obj)) {
    if (obj[key] === val) {
      return key;
    }
  }
};

module.exports = findKeyByValue;