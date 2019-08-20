import _getBuffer        from "./getBuffer"
import _getPluginVersion from "./getPluginVersion"
import _parseData        from "./parseData"

import convertSDKv9  from "./converters/scs_sdk_plugin_1_9.js"
import convertSDKv10 from "./converters/scs_sdk_plugin_1_10.js"

const _converters = []

_converters[9]  = convertSDKv9
_converters[10] = convertSDKv10

export default function getData(
  ignore,
  getBuffer        = _getBuffer,
  getPluginVersion = _getPluginVersion,
  parseData        = _parseData,
  converters       = _converters
) {
  
  const buffer  = getBuffer()

  if (!buffer) return

  const version = getPluginVersion(buffer)

  if (version <= 0) return

  if (!converters[version]) return new Error(`SCS SDK Plugin version ${version} is not supported`)

  return parseData(converters[version](buffer))

}