const assertArraysEqual = require('./assertArraysEqual')

const takeUntil = (array, callback) => {
  let newArray = []
  let status = array.map(callback)

  // array.map(arr => {
  //   console.log(status[array.indexOf(arr)])
  //   if (status[array.indexOf(arr)] === true) {
  //     // console.log(newArray)
  //     return newArray
  //   }
  //   if (status[array.indexOf(arr)] === false) {
  //     newArray.push(arr)
  //   }
  // })
  // return newArray
}

module.exports = takeUntil

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0)
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// console.log(data2.map(i => i))
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])
