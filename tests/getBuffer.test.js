const assert = require('assert')
const sinon = require('sinon')

const getBuffer = require('../lib/getBuffer')
const scsSDKTelemetry = require('../build/Release/scsSDKTelemetry')

describe('getBuffer()', function() {
  let buffers

  const opts = {
    mmfName: 'foobar'
  }

  before(function() {
    sinon.spy(getBuffer, 'default')

    buffer = getBuffer(opts)
    
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
      getBuffer.default.args,
      [
        [{mmfName: 'foobar'}],
      ]
   )
  })

  it('Should return "null" if it fails', function() {
    assert.strictEqual(buffer, null)
  })

})