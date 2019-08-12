const getBuffer        = require("./getBuffer")
const getPluginVersion = require("./getPluginVersion")
const parseData        = require("./parseData")

const versions = []

versions[9]  = require("./sdk-plugin-convert/sdk_1.9.js")

function getData() {
  try {
    const buffer  = getBuffer()
    const version = getPluginVersion(buffer)

    if (version <= 0) return

    if (!versions[version]) return new Error(`SCS SDK Plugin version ${version} is not supported`)

    return parseData(versions[version](buffer))

  } catch (err) { /* Ignore */ }
}

module.exports = getData