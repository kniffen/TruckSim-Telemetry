const path = require('path')
const fs = require('fs')

const getBuffer = require('../lib/getBuffer')
const converters = require('../lib/converters')
const parseData = require('../lib/parseData')

const buffer = getBuffer()
const data = parseData(converters[10](buffer))

fs.writeFileSync(path.resolve(__dirname, `../tests/buffers/scs_sdk_plugin_buffer_${data.game.pluginVersion}`), buffer)
