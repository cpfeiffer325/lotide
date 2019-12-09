const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

const tail = function(array) {
  const newArray = []
  array.forEach(element => {
    if(array.indexOf(element) === 0) {
      newArray
    } else {
      newArray.push(element)
    }
  })
  return newArray
}


let result = tail(["Hello", "Lighthouse", "Labs"])
assertEqual(result.length, 2)
assertEqual(result[0], "Lighthouse")
assertEqual(result[1], "Labs")

const words = ["Yo Yo", "Lighthouse", "Labs"]
result = tail(words)
assertEqual(words.length, 3)
assertEqual(result.length, 2)

const single = []
tail(single)
assertEqual(single.length, 0)
