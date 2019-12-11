const eqArrays = require('../eqArrays')

const eqObjects = function(object1, object2, isArray) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (key of Object.keys(object1)) {
      if (object1[key] === object2[key]) {
        return true
      }
    }
  }
  return false
}

module.exports = eqObjects
