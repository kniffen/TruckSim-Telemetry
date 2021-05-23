const assert = require('assert')
const sinon = require('sinon')

const utils = require('../../lib/utils')

describe('utils.parseOptions()', function() {

  it('Should parse option objects', function() {
    const actual = [
      utils.parseOptions(),
      utils.parseOptions(null),
      utils.parseOptions(undefined),
      utils.parseOptions('foo'),
      utils.parseOptions(1234),
      utils.parseOptions([]),
      utils.parseOptions({}),
      utils.parseOptions({mmfName: 'bar'}),
    ]

    const expected = [
      {mmfName: 'Local\\SCSTelemetry'},
      {mmfName: 'Local\\SCSTelemetry'},
      {mmfName: 'Local\\SCSTelemetry'},
      {mmfName: 'Local\\SCSTelemetry'},
      {mmfName: 'Local\\SCSTelemetry'},
      {mmfName: 'Local\\SCSTelemetry'},
      {mmfName: 'Local\\SCSTelemetry'},
      {mmfName: 'bar'},
    ]

    assert.deepEqual(actual, expected)
  })

})