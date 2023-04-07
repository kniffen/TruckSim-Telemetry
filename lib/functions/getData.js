const { converter, structures } = require('../converter')
const utils      = require('../utils')
const parseData  = require('../parser/parseData')

function getData(key, opts) {
  const buffer = utils.getBuffer(opts.mmfName)

  if (!buffer) return null

  const version = utils.getPluginVersion(buffer)

  if (0 >= version) return null

  if (!structures[version])
    throw new Error(`SCS-SDK-Plugin version ${version} is not supported`)

  const data = parseData(converter(version, buffer))

  return data && key && data[key] ? data[key] : data
}

module.exports = getData