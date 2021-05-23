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

    buffer = functions.getBuffer(opts)
    
    // TODO: Figure out to make the following work
    // Current error: TypeError: Cannot redefine property: getArrayBuffer
    // sinon.stub(scsSDKTelemetry, 'getArrayBuffer')
  })

  after(function() {
    sinon.restore()
  })

  
  it('Should return a buffer')

  it('Should return a buffer with a specified mapped memory file name', function() {
    assert.deepStrictEqual(
      functions.getBuffer.args,
      [
        [{mmfName: 'foobar'}],
      ]
   )
  })

  it('Should return "null" if it fails', function() {
    assert.strictEqual(buffer, null)
  })

})