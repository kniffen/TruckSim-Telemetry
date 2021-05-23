const assert = require('assert')
const sinon = require('sinon')

const functions = require('../../lib/functions')
const utils     = require('../../lib/utils')

describe('getBuffer()', function() {
  let buffers

  const opts = {
    mmfName: 'foobar'
  }

  before(function() {
    sinon.spy(functions, 'getBuffer')

    sinon
      .stub(utils, 'getArrayBuffer')
      .callsFake(() => new ArrayBuffer(8))

    buffer = functions.getBuffer(opts)
  })

  after(function() {
    sinon.restore()
  })
  
  it('Should return a buffer', function() {
    assert.ok(Buffer.isBuffer(buffer))

    assert.deepStrictEqual(buffer.toJSON().data, [0,0,0,0,0,0,0,0])
  })

  it('Should return a buffer with a specified mapped memory file name', function() {
    assert.deepStrictEqual(
      functions.getBuffer.args,
      [
        [{mmfName: 'foobar'}],
      ]
    )

    assert.deepStrictEqual(utils.getArrayBuffer.args, [['foobar']])
  })

  it('Should return "null" if it fails', function() {
    utils.getArrayBuffer.restore()

    buffer = functions.getBuffer(opts)

    assert.strictEqual(buffer, null)
  })

})