const eqArrays = require("./eqArrays");

const eqObjects = (obj1, obj2) => {
  const arrKey1 = Object.keys(obj1);
  const arrKey2 = Object.keys(obj2);
  if (arrKey1.length !== arrKey2.length) {
    return false;
  }
  for (const key of arrKey1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      return eqArrays(obj1[key], obj2[key]);
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;