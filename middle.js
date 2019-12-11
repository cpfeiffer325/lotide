const assertArraysEqual = require('./assertArraysEqual')

const middle = (array) => {
  const length = array.length
  const newArray = []
  if (length <= 2) {
    return newArray
  } else if (length % 2 === 1) {
    newArray.push(array[Math.floor(length / 2)])
    return newArray
  } else if (length % 2 === 0) {
    newArray.push(array[length/2-1])
    newArray.push(array[length/2])
    return newArray
  }
}

module.exports = middle

