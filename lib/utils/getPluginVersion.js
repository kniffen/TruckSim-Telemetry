const _ = require('struct-fu')

function getPluginVersion(buffer) {
  let pluginVersion = -1

  /* eslint-disable no-unsafe-finally */
  try {

    const entries = _.struct([
      _.padTo(8),
      _.uint32le('oldVersion'),
      _.padTo(40),
      _.uint32le("version"),
    ])

    const data = entries.unpack(buffer)

    pluginVersion = data.version || data.oldVersion

  } finally {
    return pluginVersion
  }
  /* eslint-enable no-unsafe-finally */
}

module.exports = getPluginVersion