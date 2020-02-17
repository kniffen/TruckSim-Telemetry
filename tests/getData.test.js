const assert = require("assert")
const sinon  = require("sinon")

const getData = require("../src/getData")

describe("getData()", function() {

  let version
  const buffer           = "foobar"
  const data             = {foo: "bar"}
  const parsedData       = {bar: "foo"}
  const scsSDKTelemetry  = {}
  const getBuffer        = () => buffer
  const getPluginVersion = sinon.spy(() => version)
  const converters       = []
  const parseData        = sinon.spy(() => parsedData)

  converters[5] = sinon.spy(() => data)

  beforeEach(function() {
    version = 5
    sinon.reset()
  })

  it("Should get parsed data from supported SDK versions", function() {
    const result = getData(null, scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
  
    assert.deepEqual(getPluginVersion.args[0], [buffer])
    assert.deepEqual(converters[5].args[0], [buffer])
    assert.deepEqual(parseData.args[0], [data])
    assert.deepEqual(result, parsedData)
  })

  it("Should throw an error for unsupported SDK versions", function() {
    version = 9
    try {
      const result = getData(null, scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
    } catch (err) {
      assert.equal(err.message, "SCS-SDK-Plugin version 9 is not supported")
    }
  })

  it("Should return undefined if version number is less than 0", function() {
    version = 0
    const test1 = getData(null, scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
    version = -1
    const test2 = getData(null, scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)

    assert.equal(test1, undefined)
    assert.equal(test2, undefined)
  })

  it("Should return undefined if there's no buffer", function() {
    const getNoBuffer = () => undefined
    const result = getData(null, scsSDKTelemetry, converters, getNoBuffer, getPluginVersion, parseData)
    assert.equal(result, undefined)
  })

  it("Should return data for a specified property", function() {
    const result = getData("bar", scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
  
    assert.deepEqual(getPluginVersion.args[0], [buffer])
    assert.deepEqual(converters[5].args[0], [buffer])
    assert.deepEqual(parseData.args[0], [data])
    assert.equal(result, "foo")
  })

})