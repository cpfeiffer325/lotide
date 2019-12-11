const flatten = (array) => {
  return [].concat.apply([], array)
}

module.exports = flatten
