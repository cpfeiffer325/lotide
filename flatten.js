const assertArraysEqual = require('./assertArraysEqual')

const flatten = (array) => {
  return [].concat.apply([], array)
}

module.exports = flatten

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
