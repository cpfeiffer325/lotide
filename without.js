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

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]),["hello", "world"])
assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["7", "5", "3"], [1, 2, "3"]), ["7", "5"])
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
