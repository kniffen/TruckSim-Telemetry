import assert from "assert"
import getBuffer from "../../lib/getBuffer"

describe("getBuffer()", function() {

  it("Should return a buffer", function() {
    const scsSDKTelemetryMock = {
      getArrayBuffer: () => "foobar"
    }

    const buffer = getBuffer(null, scsSDKTelemetryMock)
  
    assert.equal(buffer.toString(), "foobar")
  })

  it("Should return undefined if it fails", function() {
    const scsSDKTelemetryMock = {
      getArrayBuffer: () => { throw new Error("foobar") }
    }

    const buffer = getBuffer(null, scsSDKTelemetryMock)
  
    assert(buffer === undefined)
  })

})