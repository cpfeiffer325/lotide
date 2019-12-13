const pythagorean = (input, test) => {
  const result =  input.map(i => Math.sqrt(Math.pow(i.x, 2) + Math.pow(i.y, 2)))
  return result[test]
}

module.exports = pythagorean
