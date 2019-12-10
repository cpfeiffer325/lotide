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

const without = (array, remove) => {
  const newArray = []

  array.forEach(i => {
    if (remove.includes(i)) {
    } else {
      newArray.push(i)
    }
  })
  return newArray
}

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]),["hello", "world"])
assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["7", "5", "3"], [1, 2, "3"]), ["7", "5"])
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
