const path = require('path')
const fs   = require('fs')

const testBuffers = require('../testBuffers')
const converters  = require('../../lib/converters')
const parser      = require('../../lib/parser/parseData')

const dataDirPath = path.resolve(__dirname, 'data')

if (!fs.existsSync(dataDirPath))
  fs.mkdirSync(dataDirPath)

fs.writeFileSync(path.resolve(dataDirPath, 'v10.json'), JSON.stringify(parser(converters[10](testBuffers[10])), null, 3))
fs.writeFileSync(path.resolve(dataDirPath, 'v11.json'), JSON.stringify(parser(converters[11](testBuffers[11])), null, 3))
fs.writeFileSync(path.resolve(dataDirPath, 'v12.json'), JSON.stringify(parser(converters[12](testBuffers[12])), null, 3))
