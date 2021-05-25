const scsSDKTelemetry = require('../../build/Release/scsSDKTelemetry')

module.exports.getBuffer = scsSDKTelemetry.getBuffer

module.exports.getPluginVersion = require('./getPluginVersion')
module.exports.parseOptions     = require('./parseOptions')