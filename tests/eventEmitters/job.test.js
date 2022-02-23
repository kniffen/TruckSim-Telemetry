const assert    = require('assert')
const sinon     = require('sinon')
const cloneDeep = require('lodash.clonedeep')

const tst = require('../../lib')

const functions = require('../../lib/functions')

const getFakeData = require('../getFakeData')

describe('eventEmitters/job()', function() {

  let clock = null

  const testData = getFakeData(function(data) {
    data.events.job.finished.active = false

    data.events.job.started.active     = false
    data.events.job.started.autoLoaded = true

    data.events.job.cancelled.active             = false
    data.events.job.cancelled.cancelledTimestamp = 1000
    data.events.job.cancelled.penalty            = 2000
    data.events.job.cancelled.startedTimestamp   = 3000

    data.events.job.delivered.active             = false
    data.events.job.delivered.autoParked         = true
    data.events.job.delivered.cargoDamage        = 4000
    data.events.job.delivered.timeTaken          = 5000
    data.events.job.delivered.distance           = 6000
    data.events.job.delivered.earnedXP           = 7000
    data.events.job.delivered.deliveredTimestamp = 8000
    data.events.job.delivered.revenue            = 9000
    data.events.job.delivered.startedTimestamp   = 1100

    data.job.isSpecial                 = true
    data.job.cargo                     = 'foo'
    data.job.market                    = 'bar'
    data.job.expectedDeliveryTimestamp = 2100
    data.job.income                    = 3100
    data.job.plannedDistance           = 4100
    data.job.destination               =  {foo: 'baz'}
    data.job.source                    =  {bar: 'qux'}
  })

  const telemetry = tst()

  before(function() {
    clock = sinon.useFakeTimers()
    sinon.spy(telemetry.job, 'emit')

    sinon
      .stub(functions, 'getData')
      .callsFake(() => {
        const data = cloneDeep(testData)

        testData.job.isSpecial = !testData.job.isSpecial

        testData.job.cargo  = testData.job.cargo  == 'foo' ? 'oof' : 'foo' 
        testData.job.market = testData.job.market == 'bar' ? 'rab' : 'bar' 

        testData.job.expectedDeliveryTimestamp++
        testData.job.income++
        testData.job.plannedDistance++
        
        testData.job.destination.foo = testData.job.destination.foo == 'baz' ? 'zab' : 'baz'
        testData.job.source.bar      = testData.job.source.bar      == 'qux' ? 'xuq' : 'qux'

        return data
      })

    telemetry.watch()

    clock.tick(100)

    testData.events.job.finished.active  = true
    testData.events.job.started.active   = true
    testData.events.job.cancelled.active = true
    testData.events.job.delivered.active = true

    clock.tick(100)

    testData.events.job.finished.active  = false
    testData.events.job.started.active   = false
    testData.events.job.cancelled.active = false
    testData.events.job.delivered.active = false

    clock.tick(100)

    testData.events.job.finished.active  = true
    testData.events.job.started.active   = true
    testData.events.job.cancelled.active = true
    testData.events.job.delivered.active = true

    clock.tick(100)

    telemetry.stop()
  })

  after(function() {
    clock.restore()
    sinon.restore()
  })

  it('Should emit "finished" events', function() {
    assert.deepStrictEqual(
      telemetry.job.emit.args.filter(event => event[0] === 'finished'),
      [
        ['finished'],
        ['finished'],
        ['finished'],
      ]
    )
  })
  
  it('Should emit "started" events', function() {
    const expectedData = [
      {
        autoLoaded:                true,
        isSpecial:                 true,
        cargo:                     'foo',
        market:                    'bar',
        expectedDeliveryTimestamp: 2102,
        income:                    3102,
        plannedDistance:           4102,
        destination:               {foo: 'baz'},
        source:                    {bar: 'qux'},
      },
      {
        autoLoaded:                true,
        isSpecial:                 true,
        cargo:                     'foo',
        market:                    'bar',
        expectedDeliveryTimestamp: 2104,
        income:                    3104,
        plannedDistance:           4104,
        destination:               {foo: 'baz'},
        source:                    {bar: 'qux'},
      }
    ]

    assert.deepStrictEqual(
      telemetry.job.emit.args.filter(event => event[0] === 'started'),
      [
        ['started', expectedData[0]],
        ['started', expectedData[1]],
      ]
    )
  })
  
  it('Should emit "cancelled" events', function() {
    const expectedData = [
      {
        isSpecial:                 false,
        cargo:                     'oof',
        market:                    'rab',
        expectedDeliveryTimestamp: 2101,
        cancelledTimestamp:        1000,
        income:                    0,
        penalty:                   2000,
        plannedDistance:           4101,
        startedTimestamp:          3000,
        destination:               {foo: 'zab'},
        source:                    {bar: 'xuq'},
      },
      {
        isSpecial:                 false,
        cargo:                     'oof',
        market:                    'rab',
        expectedDeliveryTimestamp: 2103,
        cancelledTimestamp:        1000,
        income:                    0,
        penalty:                   2000,
        plannedDistance:           4103,
        startedTimestamp:          3000,
        destination:               {foo: 'zab'},
        source:                    {bar: 'xuq'},
      }
    ]

    assert.equal(telemetry.job.emit.args.filter(a => a[0] === 'cancelled').length, 3)

    assert.deepStrictEqual(
      telemetry.job.emit.args.filter(event => event[0] === 'cancelled')[0],
      ['cancelled', expectedData[0]],
    )

    assert.deepStrictEqual(
      telemetry.job.emit.args.filter(event => event[0] === 'cancelled')[2],
      ['cancelled', expectedData[1]],
    )
  })

  it('Should emit "delivered" events', function() {
    const expectedData = [
      {
        autoParked:                true,
        isSpecial:                 false,
        cargo:                     'oof',
        market:                    'rab',
        cargoDamage:               4000,
        distance:                  6000,
        earnedXP:                  7000,
        expectedDeliveryTimestamp: 2101,
        deliveredTimestamp:        8000,
        plannedDistance:           4101,
        revenue:                   9000,
        startedTimestamp:          1100,
        timeTaken:                 5000,
        destination:               {foo: 'zab'},
        source:                    {bar: 'xuq'},
      },
      {
        autoParked:                true,
        isSpecial:                 false,
        cargo:                     'oof',
        market:                    'rab',
        cargoDamage:               4000,
        distance:                  6000,
        earnedXP:                  7000,
        expectedDeliveryTimestamp: 2103,
        deliveredTimestamp:        8000,
        plannedDistance:           4103,
        revenue:                   9000,
        startedTimestamp:          1100,
        timeTaken:                 5000,
        destination:               {foo: 'zab'},
        source:                    {bar: 'xuq'},
      }
    ]

    assert.equal(telemetry.job.emit.args.filter(a => a[0] === 'delivered').length, 3)

    assert.deepStrictEqual(
      telemetry.job.emit.args.filter(event => event[0] === 'delivered')[0],
      ['delivered', expectedData[0]],
    )

    assert.deepStrictEqual(
      telemetry.job.emit.args.filter(event => event[0] === 'delivered')[2],
      ['delivered', expectedData[1]],
    )
  })

})
