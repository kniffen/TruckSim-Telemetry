const scsSDKTelemetry = require('../../build/Release/scsSDKTelemetry')

module.exports.getArrayBuffer = scsSDKTelemetry.getArrayBuffer

module.exports.getPluginVersion = require('./getPluginVersion')
module.exports.parseOptions     = require('./parseOptions')