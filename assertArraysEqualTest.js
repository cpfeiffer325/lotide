const assertArraysEqual = require('./assertArraysEqual')
const middle = require('./middle')
const flatten = require('./flatten')
const without = require('./without')

console.log('Arrays Equal Tests')
assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], ["1", 2, 3])

console.log('Middle Array Tests')
assertArraysEqual(middle([1]),[])
assertArraysEqual(middle([1, 2]),[])
assertArraysEqual(middle([1, 2, 3]),[2])
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4])

console.log('Flatten Array Test')
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])

console.log('Without Array Tests')
const words = ["hello", "world", "lighthouse"]
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]),["hello", "world"])
assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["7", "5", "3"], [1, 2, "3"]), ["7", "5"])
assertArraysEqual(words, ["hello", "world", "lighthouse"])
