const eqArrays = require('./eqArrays')

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅  Array assertion Passed: [${actual}] === [${expected}]`)
  } else {
    console.log(`🛑🛑🛑  Array assertion Failed: [${actual}] !== [${expected}]`)
  }
}

module.exports = assertArraysEqual

// assertArraysEqual([1, 2, 3], [1, 2, 3])
// assertArraysEqual([1, 2, 3], ["1", 2, 3])
