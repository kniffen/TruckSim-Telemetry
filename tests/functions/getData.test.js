const assert = require('assert')
const sinon = require('sinon')
const fs = require('fs')
const path = require('path')

const functions = require('../../lib/functions')
const utils     = require('../../lib/utils')

describe('functions.getData()', function() {

  let getBufferStub, getPluginVersionStub
  let pluginVersion, buffer, parsedData

  const opts = {
    mmfName: 'foobar'
  }

  before(function() {
    parsedData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/scs_sdk_plugin_parsed_data_10.json')))

    getBufferStub =
      sinon
        .stub(functions, 'getBuffer')
        .callsFake(() => {
          buffer = fs.readFileSync(path.resolve(__dirname, '../buffers/scs_sdk_plugin_buffer_10'))
          return buffer
        })
  
    getPluginVersionStub =
      sinon
        .stub(utils, 'getPluginVersion')
        .callsFake(() => pluginVersion)
  })

  beforeEach(function() {
    pluginVersion = 10
  })

  after(function() {
    getBufferStub.restore()
    getPluginVersionStub.restore()
  })

  afterEach(function() {
    getBufferStub.resetHistory()
    getPluginVersionStub.resetHistory()
  })

  it('Should get parsed data from supported SDK versions', function() {
    const result = functions.getData(null, opts)

    assert.deepStrictEqual(getBufferStub.args, [[opts]])
    assert.deepEqual(getPluginVersionStub.args, [[buffer]])
    assert.deepEqual(result, parsedData)
  })

  it('Should return data for a specified property', function() {
    const result = functions.getData('game', opts)
  
    assert.deepEqual(getBufferStub.args, [[opts]])
    assert.deepEqual(getPluginVersionStub.args, [[buffer]])
    assert.deepEqual(result, parsedData.game)
  })

  it('Should throw an error for unsupported SDK versions', function() {
    pluginVersion = 1234
    try {
      const result = functions.getData(null, opts)
    } catch (err) {
      assert.deepEqual(getBufferStub.args, [[opts]])
      assert.equal(err.message, 'SCS-SDK-Plugin version 1234 is not supported')
    }
  })

  it('Should return "null" if version number is less than 0', function() {
    pluginVersion = 0
    const test1 = functions.getData(null, opts)
    pluginVersion = -1
    const test2 = functions.getData(null, opts)

    assert.deepEqual(getBufferStub.args, [[opts], [opts]])
    assert.strictEqual(test1, null)
    assert.strictEqual(test2, null)
  })

  it('Should return "null" if there is no buffer', function() {
    getBufferStub.restore()

    getBufferStub = 
      sinon
        .stub(functions, 'getBuffer')
        .callsFake(() => null)

    const result = functions.getData(null, opts)
    assert.ok(getBufferStub.called)
    assert.deepEqual(getBufferStub.args, [[opts]])
    assert.strictEqual(result, null)
  })

})