import assert from "assert"
import sinon from "sinon"
import parseData from "../../lib/parseData"
import path from "path"
import fs from "fs"

import convertSDKv9  from "../../lib/converters/scs_sdk_plugin_1_9.js"
import convertSDKv10 from "../../lib/converters/scs_sdk_plugin_1_10.js"

const converters = []

converters[9]  = convertSDKv9
converters[10] = convertSDKv10

describe("parseData()", function() {

  it("Should parse SDK 1.9 data", function() {
    const buffer = fs.readFileSync(path.resolve(__dirname, "../../buffers/scs_sdk_plugin_buffer_1_9"))
    const rawData = converters[9](buffer)
    const expected = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../data/scs_sdk_plugin_parsed_data_1_9.json")))
    const actual = parseData(rawData)

    assert.deepEqual(expected, actual)
  })

  it("Should parse SDK 1.10 data", function() {
    const buffer = fs.readFileSync(path.resolve(__dirname, "../../buffers/scs_sdk_plugin_buffer_1_10"))
    const rawData = converters[10](buffer)
    const expected = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../data/scs_sdk_plugin_parsed_data_1_10.json")))
    const actual = parseData(rawData)

    assert.deepEqual(expected, actual)
  })

})