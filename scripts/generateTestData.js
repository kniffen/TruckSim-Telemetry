const path = require('path')
const fs   = require('fs')

const converters = require('../lib/converters')
const parseData  = require('../lib/parser/parseData')

const version = 10

const bufferFilePath =
  path.resolve(__dirname, `../tests/buffers/scs_sdk_plugin_buffer_${version}`)

if (!fs.existsSync(bufferFilePath)) {
  console.log('No buffer file found, please run the "generate-test-buffer" script first')
  return
}

const buffer  =
  fs.readFileSync(bufferFilePath)

const convertedData = converters[version](buffer)
const parsedData    = parseData(convertedData)

const folderPath = path.resolve(__dirname, '../tests/data/')

fs.mkdirSync(folderPath, {recursive: true})

fs.writeFileSync(path.resolve(folderPath, `scs_sdk_plugin_raw_data_${version}.json`),    JSON.stringify(convertedData, null, 3))
fs.writeFileSync(path.resolve(folderPath, `scs_sdk_plugin_parsed_data_${version}.json`), JSON.stringify(parsedData,    null, 3))

console.log('Test data successfully generated')
