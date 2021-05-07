const assert = require('assert')
const sinon = require('sinon')

const parseOptions = require('../lib/parseOptions')

describe('parseOptions()', function() {

  it('Should parse option objects', function() {
    const actual = [
      parseOptions(),
      parseOptions(null),
      parseOptions(undefined),
      parseOptions('foo'),
      parseOptions(1234),
      parseOptions([]),
      parseOptions({}),
      parseOptions({mmfName: 'bar'}),
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