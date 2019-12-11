const assert = require('chai').assert
const tail = require('../tail')

describe('#tail', () => {

  it(`returns ['Lighthouse', 'Labs'] from ['Hello', 'Lighthouse', 'Labs']`, () => {
    let result = tail(['Hello', 'Lighthouse', 'Labs'])
    assert.strictEqual(result.length, 2)
    assert.strictEqual(result[0], 'Lighthouse')
    assert.strictEqual(result[1], 'Labs')
  })

  it(`tail function does not change the original array`, () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"]
    let result = tail(words)
    assert.strictEqual(words.length, 3)
    assert.strictEqual(result.length, 2)
  })

  it(`returns an empty array if no no data in the array`, () => {
    const single = []
    tail(single)
    assert.strictEqual(single.length, 0)
  })
})
