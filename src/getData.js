function getData(
  key,
  scsSDKTelemetry,
  converters,
  getBuffer,
  getPluginVersion,
  parseData
) {
  const buffer = getBuffer(scsSDKTelemetry)

  if (!buffer) return

  const version = getPluginVersion(buffer)

  if (version <= 0) return

  if (!converters[version]) return new Error(`SCS SDK Plugin version ${version} is not supported`)

  const data = parseData(converters[version](buffer))

  return data && key && data[key] ? data[key] : data
}

module.exports = getData