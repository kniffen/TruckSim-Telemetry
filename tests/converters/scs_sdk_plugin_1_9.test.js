const path   = require("path")
const fs     = require("fs")
const assert = require("assert")

const converter = require("../../src/converters/scs_sdk_plugin_1_9")

describe("converters/scs_sdk_plugin_1_9()", function() {

  it("Should convert the buffer to an object", function() {
    const buffer   = fs.readFileSync(path.resolve(__dirname, "../buffers/scs_sdk_plugin_buffer_1_9"))
    const expected = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/scs_sdk_plugin_raw_data_1_9.json")))
    const actual   = converter(buffer)

    assert.deepEqual(expected, actual)
  })

})