const path = require('path')
const fs = require('fs')

const converters = require('../lib/converters')
const parseData = require('../lib/parseData')

const version = 10

const buffer  =
  fs.readFileSync(path.resolve(__dirname, `../tests/buffers/scs_sdk_plugin_buffer_${version}`))

const converted = converters[version](buffer)
const parsed = parseData(converted)

fs.writeFileSync(
  path.resolve(__dirname, `../tests/data/scs_sdk_plugin_raw_data_${version}.json`),
  JSON.stringify(converted, null, 3)
)

fs.writeFileSync(
  path.resolve(__dirname, `../tests/data/scs_sdk_plugin_parsed_data_${version}.json`),
  JSON.stringify(parsed, null, 3)
)
