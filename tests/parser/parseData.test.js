const path = require('path')
const fs = require('fs')
const assert = require('assert')

const parseData = require('../../lib/parser/parseData')
const converters = require('../../lib/converters')

describe('parseData()', function() {

  it('Should parse SDK 1.10 data', function() {
    const buffer   = fs.readFileSync( path.resolve( __dirname, '../buffers/scs_sdk_plugin_buffer_10' ) )
    const rawData  = converters[10]( buffer )
    const expected = JSON.parse( fs.readFileSync( path.resolve(__dirname, '../data/scs_sdk_plugin_parsed_data_10.json' ) ) )
    const actual   = parseData( rawData )

    assert.deepEqual( actual, expected )
  })

})