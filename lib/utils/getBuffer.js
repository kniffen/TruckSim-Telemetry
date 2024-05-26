const scsSDKTelemetry = require('../../build/Release/scsSDKTelemetry')

function getBuffer(mmfName) {
  try {
    const buffer = scsSDKTelemetry.getBuffer(mmfName);
    return buffer;

  } catch(err) {
    return null;
  }
}

module.exports = getBuffer