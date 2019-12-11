const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

const countOnly = (allItems, itemsToCount) => {
  let results = {}

  for (const item of allItems) {
    if (itemsToCount[item]) {
      results[item] ? results[item] += 1 : results[item] = 1
    }
  }
  return results
}

const firstNames = [
  "Karl",
  "Kavith",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Kavith",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
const result2 = countOnly(firstNames, { "Jason": true, "Kavith": true, "Fang": false, "Karl": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2)
assertEqual(Object.keys(result1).length, 2)
assertEqual(result2["Karl"], 1);
assertEqual(result2["Kavith"], 3);
assertEqual(result2["Fang"], undefined)
assertEqual(Object.keys(result2).length, 3)
