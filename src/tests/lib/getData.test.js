import assert  from "assert"
import sinon   from "sinon"
import getData from "../../lib/getData"

describe("getData()", function() {

  let version
  const buffer           = "foobar"
  const data             = {foo: "bar"}
  const parsedData       = {bar: "foo"}
  const getBuffer        = () => buffer
  const getPluginVersion = sinon.spy(() => version)
  const parseData        = sinon.spy(() => parseData)
  const converters       = []

  converters[5] = sinon.spy(() => data)

  beforeEach(function() {
    version = 5
    sinon.reset()
  })

  it("Should get parsed data from supported SDK versions", function() {
    const result = getData(null, getBuffer, getPluginVersion, parseData, converters)
  
    assert.deepEqual(getPluginVersion.args[0][0], buffer)
    assert.deepEqual(converters[5].args[0][0], buffer)
    assert.deepEqual(parseData.args[0][0], data)
    assert.deepEqual(result, parseData)
  })

  it("Should throw an error for unsupported SDK versions", function() {
    version = 9
    try {
      const result = getData(null, getBuffer, getPluginVersion, parseData, converters)
    } catch (err) {
      assert.equal(err.message, "SCS-SDK-Plugin version 9 is not supported")
    }
  })

  it("Should return undefined if version number is less than 0", function() {
    version = 0
    const test1 = getData(null, getBuffer, getPluginVersion, parseData, converters)
    version = -1
    const test2 = getData(null, getBuffer, getPluginVersion, parseData, converters)

    assert.equal(test1, undefined)
    assert.equal(test2, undefined)
  })

  it("Should return undefined if there's no buffer", function() {
    const getNoBuffer = () => undefined
    const result = getData(null, getNoBuffer, getPluginVersion, parseData, converters)
    assert.equal(result, undefined)
  })

})