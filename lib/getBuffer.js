const scsSDKTelemetry = require('../build/Release/scsSDKTelemetry')

function getBuffer(opts) {
  try {
    const arrayBuffer = scsSDKTelemetry.getArrayBuffer(opts.mmfName)
    const buffer = new Buffer.from(arrayBuffer)
    
    return buffer
  
  } catch (err) {  /* ignore, make the function return undefined */  }
}

module.exports = function() {
  return module.exports.default.apply(this, arguments)
}
module.exports.default = getBuffer