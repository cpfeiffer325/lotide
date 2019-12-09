const eqArrays = (first, second) => {
  for (let i in first) {
    if (first[i] !== second[i]) return false
  }
  return true
}

const assertArraysEqual = (first, second) => {
  if (eqArrays(first, second)) {
    console.log(`Array assertion Passed: [${first}] === ${second}`)
  } else {
    console.log(`Array assertion Failed: [${first}] !== ${second}`)
  }
}
