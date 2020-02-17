const assert = require("assert")

const getBuffer = require("../src/getBuffer")

describe("getBuffer()", function() {

  it("Should return a buffer", function() {
    const scsSDKTelemetryMock = {
      getArrayBuffer: () => "foobar"
    }

    const buffer = getBuffer(scsSDKTelemetryMock)
  
    assert.equal(buffer.toString(), "foobar")
  })

  it("Should return undefined if it fails", function() {
    const scsSDKTelemetryMock = {
      getArrayBuffer: () => { throw new Error("foobar") }
    }

    const buffer = getBuffer(scsSDKTelemetryMock)
  
    assert(buffer === undefined)
  })

})