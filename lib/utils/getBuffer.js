const scsSDKTelemetry = require('../../build/Release/scsSDKTelemetry')

function getBuffer(mmfName) {
  let buffer = null

  try {
    
    buffer = scsSDKTelemetry.getBuffer(mmfName)
  
  } finally {

    return buffer

  }
}

module.exports = getBuffer