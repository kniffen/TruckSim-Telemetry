const scsSDKTelemetry = require('../../build/Release/scsSDKTelemetry')

function getBuffer(mmfName) {
  try {
    const buffer = scsSDKTelemetry.getBuffer(mmfName);
    return buffer;

    // eslint-disable-next-line no-unused-vars
  } catch (err) {
    return null;
  }
}

module.exports = getBuffer