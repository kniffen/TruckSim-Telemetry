import assert from "assert"
import sinon  from "sinon"
import fs     from "fs"
import path   from "path"

import getData   from "../lib/getData"

import * as getBuffer        from "../lib/getBuffer"
import * as getPluginVersion from "../lib/getPluginVersion"

describe("getData()", function() {

  let getBufferStub, getPluginVersionStub
  let version, buffer, parsedData

  const opts = {
    mmfName: "foobar"
  }

  before(function() {
    parsedData = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./data/scs_sdk_plugin_parsed_data_10.json")))

    getBufferStub = sinon.stub(getBuffer, "default").callsFake(function() {
      buffer = fs.readFileSync(path.resolve(__dirname, "./buffers/scs_sdk_plugin_buffer_10"))
      return buffer
    })
  
    getPluginVersionStub = sinon.stub(getPluginVersion, "default").callsFake(function() {
      return version
    })
  })

  beforeEach(function() {
    version = 10
  })

  after(function() {
    getBufferStub.restore()
    getPluginVersionStub.restore()
  })

  afterEach(function() {
    getBufferStub.resetHistory()
    getPluginVersionStub.resetHistory()
  })

  it("Should get parsed data from supported SDK versions", function() {
    const result = getData(null, opts)

    assert.deepEqual(getBufferStub.args, [[opts]])
    assert.deepEqual(getPluginVersionStub.args, [[buffer]])
    assert.deepEqual(result, parsedData)
  })

  it("Should return data for a specified property", function() {
    const result = getData("game", opts)
  
    assert.deepEqual(getBufferStub.args, [[opts]])
    assert.deepEqual(getPluginVersionStub.args, [[buffer]])
    assert.deepEqual(result, parsedData.game)
  })

  it("Should throw an error for unsupported SDK versions", function() {
    version = 1234
    try {
      const result = getData(null, opts)
    } catch (err) {
      assert.deepEqual(getBufferStub.args, [[opts]])
      assert.equal(err.message, "SCS-SDK-Plugin version 1234 is not supported")
    }
  })

  it("Should return undefined if version number is less than 0", function() {
    version = 0
    const test1 = getData(null, opts)
    version = -1
    const test2 = getData(null, opts)

    assert.deepEqual(getBufferStub.args, [[opts], [opts]])
    assert.equal(test1, undefined)
    assert.equal(test2, undefined)
  })

  it("Should return undefined if there's no buffer", function() {
    getBufferStub.restore()

    getBufferStub = sinon.stub(getBuffer, "default").callsFake(function() {
      return undefined
    })

    const result = getData(null, opts)
    assert.deepEqual(getBufferStub.args, [[opts]])
    assert.equal(result, undefined)
  })

})