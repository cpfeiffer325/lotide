const assert = require('chai').assert
const pythagorean = require('../pythagorean')

const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
]

describe('#pythagorean', () => {
  it(`returns 5 for { x: 3, y: 4 }`, () => {
    assert.strictEqual(pythagorean(input, 0), 5)
  })

  it(`returns 13 for { x: 12, y: 5 }`, () => {
    assert.strictEqual(pythagorean(input, 1), 13)
  })

  it(`returns 17 for { x: 8, y: 15 }`, () => {
    assert.strictEqual(pythagorean(input, 2), 17)
  })
})
