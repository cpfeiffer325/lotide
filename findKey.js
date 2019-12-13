const assertEqual = require('./assertEqual')

const findKey = (object) => {
  return Object.keys(object).find(x => x.stars === 2)
  // return Object.keys(obj).find(key => obj[key] === val)
}

module.exports = findKey

ratings = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

console.log(findKey(ratings))
console.log(Object.keys(ratings).find(x => console.log(x)))
// assertEqual(findKey(ratings, x => x.stars === 2), "noma")
