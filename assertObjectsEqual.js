const eqObjects = require('./eqObjects')

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅  Object assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`)
  } else {
    console.log(`🛑🛑🛑  Object assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`)
  }
}

module.exports = assertObjectsEqual
