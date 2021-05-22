const assert    = require('assert')
const sinon     = require('sinon')
const cloneDeep = require('lodash.clonedeep')

const tst = require('../../lib')

const getData = require('../../lib/getData')

describe('eventEmitters/trailers()', function() {

  let clock = null
  const telemetry = tst()

  const testData = {
    trailers: [
      {
        attached: false,
        damage:   {total: 0.00},
      },
      {
        attached: true,
        damage:   {total: 0.01},
      }
    ],
    events:     {},
    game:       {},
    navigation: {},
  }

  before(function() {
    clock = sinon.useFakeTimers()

    sinon.spy(telemetry.trailers, 'emit')
    sinon.spy(telemetry.trailer,  'emit')

    sinon
      .stub(getData, 'default')
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
    assert.deepStrictEqual(
      telemetry.trailers.emit.args.filter(event => event[0] === 'damage'),
      [
        ['damage', 0, {total: 0.01}, {total: 0.00}],
        ['damage', 1, {total: 0.02}, {total: 0.01}],
      ]
    )

    assert.deepStrictEqual(
      telemetry.trailer.emit.args.filter(event => event[0] === 'damage'),
      [
        ['damage', {total: 0.01}, {total: 0.00}],
      ]
    )
  })

})
