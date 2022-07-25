// const assertEqual = require('./assertEqual');

const tail = (arr) => {
  return arr.slice(1);
};

// // Test Case 1: Check the returned array elements
// const case1 = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(case1.length, 2); // ensure we get back two elements
// assertEqual(case1[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(case1[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2: Check the returned array elements
// const case2 = tail(["Hello"]);
// assertEqual(case2.length, 0); // ensure we get back two elements

// // Test Case 3: Check the returned array elements
// const case3 = tail([]);
// assertEqual(case3.length, 0); // ensure we get back two elements

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!


module.exports = tail;