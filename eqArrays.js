const eqArrays = (first, second) => {
  for (let i in first) {
    if (first[i] !== second[i]) return false
  }
  return true
}

module.exports = eqArrays
