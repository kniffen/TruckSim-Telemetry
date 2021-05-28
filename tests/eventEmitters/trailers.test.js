const assert    = require('assert')
const sinon     = require('sinon')
const cloneDeep = require('lodash.clonedeep')

const tst = require('../../lib')

const functions = require('../../lib/functions')

const getFakeData = require('../getFakeData')

describe('eventEmitters/trailers()', function() {

  let clock = null
  const telemetry = tst()

  const testData = getFakeData(function(data) {
    data.trailers[0].attached = false
    data.trailers[0].damage.total = 0.00

    data.trailers[1].attached = true
    data.trailers[1].damage.total = 0.01
  })

  before(function() {
    clock = sinon.useFakeTimers()

    sinon.spy(telemetry.trailers, 'emit')
    sinon.spy(telemetry.trailer,  'emit')

    sinon
      .stub(functions, 'getData')
      .callsFake(() => cloneDeep(testData))

    telemetry.watch()

    clock.tick(100)

    testData.trailers[0].attached     = true
    testData.trailers[0].damage.total = 0.01
    testData.trailers[1].attached     = false
    testData.trailers[1].damage.total = 0.02

    clock.tick(100)

    testData.trailers[0].attached     = true
    testData.trailers[0].damage.total = 0.00
    testData.trailers[1].attached     = false
    testData.trailers[1].damage.total = 0.00

    clock.tick(100)

    testData.trailers[0].attached = false
    testData.trailers[1].attached = true

    clock.tick(100)
  })

  after(function() {
    telemetry.stop()
    clock.restore()
    sinon.restore()
  })

  it('Should emit "coupling" events', function() {
    assert.deepStrictEqual(
      telemetry.trailers.emit.args.filter(event => event[0] === 'coupling'),
      [
        ['coupling', 0, true],
        ['coupling', 1, false],
        ['coupling', 0, false],
        ['coupling', 1, true],
      ]
    )

    assert.deepStrictEqual(
      telemetry.trailer.emit.args.filter(event => event[0] === 'coupling'),
      [
        ['coupling', true],
        ['coupling', false],
      ]
    )
  })

  it('Should emit "damage" events', function() {
    const trailersDamageEvents = telemetry.trailers.emit.args.filter(event => event[0] === 'damage')
    const trailersTotalDamage = trailersDamageEvents.map(event => ([
      event[1], 
      event[2].total,
      event[3].total,
    ]))

    assert.deepStrictEqual(trailersTotalDamage, [
      [0, 0.01, 0.00],
      [1, 0.02, 0.01],
    ])

    const trailerDamageEvents = telemetry.trailer.emit.args.filter(event => event[0] === 'damage')
    const trailerTotalDamage = trailerDamageEvents.map(event => ([
      event[1].total,
      event[2].total,
    ]))

    assert.deepStrictEqual(trailerTotalDamage, [
      [0.01, 0.00],
    ])
  })

})
