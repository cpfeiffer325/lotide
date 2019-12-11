const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

function countLetters(input) {
  let letterCount = {}
  str = input.split('')
  for (let i of str) {
    !letterCount[i] ? letterCount[i] = 1 : letterCount[i]++
  }
  return letterCount
  }
  
  assertEqual(countLetters('lighthouse'), {l: 1, i: 1, g: 1, h: 2, t: 1, o: 1, u:1, s: 1, e: 1})
  
