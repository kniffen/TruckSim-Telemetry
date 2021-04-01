import assert       from "assert"
import sinon        from "sinon"

import getBuffer from "../lib/getBuffer"
import scsSDKTelemetry from "../../build/Release/scsSDKTelemetry"

describe("getBuffer()", function() {

  it( "Should return a buffer" )
  // it("Should return a buffer", function() {
  //   const getArrayBufferStub = sinon.stub(scsSDKTelemetry, "getArrayBuffer").callsFake(() => "foobar")
  //   const buffer = getBuffer()

  //   assert.equal(buffer.toString(), "foobar")
  //   getArrayBufferStub.restore()
  // })

  it( "Should return undefined if it fails" )
  // it("Should return undefined if it fails", function() {
  //   const getArrayBufferStub = sinon.stub(scsSDKTelemetry, "getArrayBuffer").callsFake(function() {
  //     throw new Error("foobar")
  //   })
   
  //   const buffer = getBuffer()
    
  //   assert(buffer === undefined)
  //   getArrayBufferStub.restore()

  // })

})