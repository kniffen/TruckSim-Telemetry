const scs_sdk_plugin_1_10 = require('./scs_sdk_plugin_10')
const scs_sdk_plugin_1_11 = require('./scs_sdk_plugin_11')
const scs_sdk_plugin_1_12 = require('./scs_sdk_plugin_12')

const structures = []

structures[10] = scs_sdk_plugin_1_10
structures[11] = scs_sdk_plugin_1_11
structures[12] = scs_sdk_plugin_1_12

function converter(version, buffer) {
  // This will help with lowering memory usage if running the node process with the --expose-gc flag
  // However it's not recommended as it can affect performance
  // TODO: Remove this and handle memory better instead
  if (global.gc) {
    global.gc()
  }

  return structures[version].unpack(buffer)
}

module.exports = {
  converter,
  structures
}