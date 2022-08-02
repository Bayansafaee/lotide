const letterPositions = (str) => {
  const results = {};
  let count = 0;
  const strMod = str.replace(/\s+/g, '');
  for (const letter of strMod) {
    if (results[letter]) {
      results[letter].push(count);
    } else {
      results[letter] = [count];
    }
    count ++;
  }
  return results;
};

module.exports = letterPositions;