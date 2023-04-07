const path = require('path')
const fs   = require('fs')

const testBuffers = require('../test-buffers')
const { converter } = require('../lib/converter')
const parser      = require('../lib/parser/parseData')

const dataDirPath = path.resolve(__dirname, 'data')

if (!fs.existsSync(dataDirPath))
  fs.mkdirSync(dataDirPath)

fs.writeFileSync(path.resolve(dataDirPath, 'v10.json'), JSON.stringify(parser(converter(10, testBuffers[10])), null, 3))
fs.writeFileSync(path.resolve(dataDirPath, 'v11.json'), JSON.stringify(parser(converter(11, testBuffers[11])), null, 3))
fs.writeFileSync(path.resolve(dataDirPath, 'v12.json'), JSON.stringify(parser(converter(12, testBuffers[12])), null, 3))
