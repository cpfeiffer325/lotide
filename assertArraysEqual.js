const eqArrays = (first, second) => {
  for (let i in first) {
    if (first[i] !== second[i]) return false
  }
  return true
}

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅  Array assertion Passed: [${actual}] === [${expected}]`)
  } else {
    console.log(`🛑🛑🛑  Array assertion Failed: [${actual}] !== [${expected}]`)
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], ["1", 2, 3])
