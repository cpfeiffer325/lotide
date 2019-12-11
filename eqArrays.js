const assertEqual = require('./assertEqual')

const eqArrays = (first, second) => {
  for (let i in first) {
    if (first[i] !== second[i]) return false
  }
  return true
}

module.exports = eqArrays

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
