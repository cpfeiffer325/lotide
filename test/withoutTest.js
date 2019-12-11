const assertArraysEqual = require('../assertArraysEqual')
const without = require('../without')

const words = ["hello", "world", "lighthouse"]
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]),["hello", "world"])
assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["7", "5", "3"], [1, 2, "3"]), ["7", "5"])
assertArraysEqual(words, ["hello", "world", "lighthouse"])
