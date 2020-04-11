import assert from "assert"
import sinon  from "sinon"
import path   from "path"
import fs     from "fs"

import parseData  from "../lib/parseData"
import converters from "../lib/converters"

describe("parseData()", function() {

  it("Should parse SDK 1.9 data", function() {
    const buffer   = fs.readFileSync(path.resolve(__dirname, "./buffers/scs_sdk_plugin_buffer_1_9"))
    const rawData  = converters[9](buffer)
    const expected = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./data/scs_sdk_plugin_parsed_data_1_9.json")))
    const actual   = parseData(rawData)

    assert.deepEqual(expected, actual)
  })

  it("Should parse SDK 1.10 data", function() {
    const buffer   = fs.readFileSync(path.resolve(__dirname, "./buffers/scs_sdk_plugin_buffer_1_10"))
    const rawData  = converters[10](buffer)
    const expected = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./data/scs_sdk_plugin_parsed_data_1_10.json")))
    const actual   = parseData(rawData)

    assert.deepEqual(expected, actual)
  })

})