const assertArraysEqual = require('./assertArraysEqual')

const without = (array, remove) => {
  const newArray = []

  array.forEach(i => {
    if (remove.includes(i)) {
    } else {
      newArray.push(i)
    }
  })
  return newArray
}

module.exports = without
