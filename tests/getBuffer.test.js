import assert       from "assert"
import sinon        from "sinon"

import getBuffer from "../src/getBuffer"
import scsSDKTelemetry from "../build/Release/scsSDKTelemetry"

describe("getBuffer()", function() {
  const opts = {
    mmfName: "foobar"
  }

  const sandbox = sinon.createSandbox()

  before(function() {
    // TODO: Figure out to make the following work
    // Current error: TypeError: Cannot redefine property: getArrayBuffer
    
    //sandbox.stub(scsSDKTelemetry, "getArrayBuffer")
  })

  
  it("Should return a buffer")

  it("Should return a buffer with a specified mapped memory file name")

  it("Should return undefined if it fails", function() {
    const buffer = getBuffer(opts)
    
    assert(buffer === undefined)
  })

})