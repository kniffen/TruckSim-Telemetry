const path = require('path')
const fs   = require('fs')

const converters = require('../lib/converters')
const parseData  = require('../lib/parser/parseData')

const pluginVersion = 11
const bufferPath    = path.resolve(__dirname, `./buffers/scs_sdk_plugin_buffer_${pluginVersion}`)

const buffer = fs.readFileSync(bufferPath)

function getFakeData(cb) {
  const convertedData = converters[pluginVersion](buffer)
  const parsedData    = parseData(convertedData)

  if (cb) cb(parsedData)

  return parsedData
}

module.exports = getFakeData