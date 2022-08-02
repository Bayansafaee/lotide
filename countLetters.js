const countLetters = (str) => {
  let results = {};
  const strMod = str.replace(/\s+/g, '');
  for (const letter of strMod) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
