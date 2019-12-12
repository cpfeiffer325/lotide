const eqArrays = require('./eqArrays')

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    let keys = Object.keys(object1)
    for (key of keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        eqArrays(object1[key], object2[key])
      } else if (object1[key] === object2[key]) {
        return true
      }
    }
  }
  return false
}

module.exports = eqObjects
