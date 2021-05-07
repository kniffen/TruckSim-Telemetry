const getBuffer = require('./getBuffer')
const getPluginVersion = require('./getPluginVersion')
const converters = require('./converters')
const parseData = require('./parseData')

function getData(key, opts) {
  const buffer = getBuffer(opts)

  if ( !buffer ) return

  const version = getPluginVersion(buffer)

  if ( version <= 0 ) return

  if ( !converters[version] )
    throw new Error(`SCS-SDK-Plugin version ${version} is not supported`)
  
  const data = parseData(converters[version](buffer))

  return data && key && data[key] ? data[key] : data
}

module.exports = function() {
  return module.exports.default.apply(this, arguments)
}
module.exports.default = getData