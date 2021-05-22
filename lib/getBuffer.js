const scsSDKTelemetry = require('../build/Release/scsSDKTelemetry')

function getBuffer(opts) {
  let buffer = null

  try {
    
    const arrayBuffer = scsSDKTelemetry.getArrayBuffer(opts.mmfName)

    buffer = new Buffer.from(arrayBuffer)
  
  } finally {

    return buffer

  }
}

// TODO: remove this "hack" and create a "parent" module to stub from instead
// This is only needed to allow for stubbing during tests
module.exports = function() {
  return module.exports.default.apply(this, arguments)
}
module.exports.default = getBuffer