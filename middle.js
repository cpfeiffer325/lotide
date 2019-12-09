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

const middle = (array) => {
  const length = array.length
  const newArray = []
  if (length <= 2) {
    return newArray
  } else if (length % 2 === 1) {
    newArray.push(array[Math.floor(length / 2)])
    return newArray
  } else if (length % 2 === 0) {
    newArray.push(array[length/2-1])
    newArray.push(array[length/2])
    return newArray
  }

}

assertArraysEqual(middle([1]),[])
assertArraysEqual(middle([1, 2]),[])
assertArraysEqual(middle([1, 2, 3]),[2])
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4])
