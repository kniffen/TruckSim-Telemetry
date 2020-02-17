const assert = require("assert")
const sinon  = require("sinon")
const path   = require("path")
const fs     = require("fs")

const parseData     = require("../src/parseData")
const convertSDKv9  = require("../src/converters/scs_sdk_plugin_1_9")
const convertSDKv10 = require("../src/converters/scs_sdk_plugin_1_10")

const converters = []

converters[9]  = convertSDKv9
converters[10] = convertSDKv10

describe("parseData()", function() {

  it("Should parse SDK 1.9 data", function() {
    const buffer = fs.readFileSync(path.resolve(__dirname, "./buffers/scs_sdk_plugin_buffer_1_9"))
    const rawData = converters[9](buffer)
    const expected = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./data/scs_sdk_plugin_parsed_data_1_9.json")))
    const actual = parseData(rawData)

    assert.deepEqual(expected, actual)
  })

  it("Should parse SDK 1.10 data", function() {
    const buffer = fs.readFileSync(path.resolve(__dirname, "./buffers/scs_sdk_plugin_buffer_1_10"))
    const rawData = converters[10](buffer)
    const expected = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./data/scs_sdk_plugin_parsed_data_1_10.json")))
    const actual = parseData(rawData)

    assert.deepEqual(expected, actual)
  })

})