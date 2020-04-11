import getBuffer        from "./getBuffer"
import getPluginVersion from "./getPluginVersion"
import converters       from "./converters"
import parseData        from "./parseData"

export default function getData(key) {
  const buffer = getBuffer()

  if (!buffer) return

  const version = getPluginVersion(buffer)

  if (version <= 0) return

  if (!converters[version]) throw new Error(`SCS-SDK-Plugin version ${version} is not supported`)
  
  const data = parseData(converters[version](buffer))

  return data && key && data[key] ? data[key] : data
}