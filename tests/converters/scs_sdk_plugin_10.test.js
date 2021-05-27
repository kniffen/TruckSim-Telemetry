const path = require('path')
const fs = require('fs')
const assert = require('assert')

const converter = require('../../lib/converters/scs_sdk_plugin_10')

describe('converters/scs_sdk_plugin_10()', function() {

  // This doesn't actually test anything other than that the generated buffer and test data are equal
  it('Should convert the buffer to an object', function() {
    const buffer = fs.readFileSync(path.resolve(__dirname, '../buffers/scs_sdk_plugin_buffer_10'))
    const expected = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/scs_sdk_plugin_raw_data_10.json')))
    const actual = converter(buffer)

    assert.deepEqual(expected, actual)
  })

})