const scs_sdk_plugin_1_10 = require('./scs_sdk_plugin_10')
const scs_sdk_plugin_1_11 = require('./scs_sdk_plugin_11')
const scs_sdk_plugin_1_12 = require('./scs_sdk_plugin_12')

const converters = []

converters[10] = scs_sdk_plugin_1_10
converters[11] = scs_sdk_plugin_1_11
converters[12] = scs_sdk_plugin_1_12

module.exports = converters