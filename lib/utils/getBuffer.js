const scsSDKTelemetry = require('../../build/Release/scsSDKTelemetry')

function getBuffer(mmfName) {
  let buffer = null

  /* eslint-disable no-unsafe-finally */
  try {
    buffer = scsSDKTelemetry.getBuffer(mmfName)

  } finally {
    return buffer
  }
  /* eslint-enable no-unsafe-finally */
}

module.exports = getBuffer