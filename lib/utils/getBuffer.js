const scsSDKTelemetry = require('../../build/Release/scsSDKTelemetry')

function getBuffer(mmfName) {
  let buffer = null

  try {
    
    buffer = scsSDKTelemetry.getBuffer(mmfName)

    // With some runtimes such as deno the buffer is returned as a regular UInt8Array.
    // As such we need to convert it to the Buffer subclass.
    if(!(buffer instanceof Buffer))
      buffer = new Buffer.from(buffer)

  } finally {

    return buffer

  }
}

module.exports = getBuffer