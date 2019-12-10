const eqArrays = (first, second) => {
  if (first.length !== second.length) {
    return false
  } else {
    for (let i in first) {
      if (first[i] !== second[i]) return false
    }
    return true
  }
}

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅  Array assertion Passed: [${actual}] === [${expected}]`)
  } else {
    console.log(`🛑🛑🛑  Array assertion Failed: [${actual}] !== [${expected}]`)
  }
}

const flatten = (array) => {
  return [].concat.apply([], array)
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
