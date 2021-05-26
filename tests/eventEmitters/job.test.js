const assert    = require('assert')
const sinon     = require('sinon')
const cloneDeep = require('lodash.clonedeep')

const tst = require('../../lib')

const functions = require('../../lib/functions')

describe('eventEmitters/job()', function() {

  let clock = null

  let testData = {
    events: {
      job: {
        finished:  {
          active: false
        },
        started:   {
          active:     false,
          autoLoaded: true,
        },
        cancelled: {
          active:        false,
          finishingTime: 1000,
          penalty:       2000,
          startingTime:  3000,
        },
        delivered: {
          active:          false,
          autoParked:      true,
          cargoDamage:     4000,
          deliveryTime:    5000,
          distance:        6000,
          earnedXP:        7000,
          finishingTime:   8000,
          revenue:         9000,
          startingTime:    1100,
        },
      }
    },
    job: {
      isSpecial:       true,
      cargo:           'foo',
      market:          'bar',
      deliveryTime:    2100,
      income:          3100,
      plannedDistance: 4100,
      destination:     {foo: 'baz'},
      source:          {bar: 'qux'},
    },
    game:     {},
    trailers: [],
    navigation: {},
  }

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

        testData.job.deliveryTime++
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
      ]
    )
  })
  
  it('Should emit "started" events', function() {
    const expectedData = [
      {
        autoLoaded:      true,
        isSpecial:       true,
        cargo:           'foo',
        market:          'bar',
        deliveryTime:    2102,
        income:          3102,
        plannedDistance: 4102,
        destination:     {foo: 'baz'},
        source:          {bar: 'qux'},
      },
      {
        autoLoaded:      true,
        isSpecial:       true,
        cargo:           'foo',
        market:          'bar',
        deliveryTime:    2104,
        income:          3104,
        plannedDistance: 4104,
        destination:     {foo: 'baz'},
        source:          {bar: 'qux'},
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
        isSpecial:       false,
        cargo:           'oof',
        market:          'rab',
        deliveryTime:    2101,
        finishingTime:   1000,
        income:          0,
        penalty:         2000,
        plannedDistance: 4101,
        startingTime:    3000,
        destination:     {foo: 'zab'},
        source:          {bar: 'xuq'},
      },
      {
        isSpecial:       false,
        cargo:           'oof',
        market:          'rab',
        deliveryTime:    2103,
        finishingTime:   1000,
        income:          0,
        penalty:         2000,
        plannedDistance: 4103,
        startingTime:    3000,
        destination:     {foo: 'zab'},
        source:          {bar: 'xuq'},
      }
    ]

    assert.deepStrictEqual(
      telemetry.job.emit.args.filter(event => event[0] === 'cancelled'),
      [
        ['cancelled', expectedData[0]],
        ['cancelled', expectedData[1]],
      ]
    )
  })

  it('Should emit "delivered" events', function() {
    const expectedData = [
      {
        autoParked:      true,
        isSpecial:       false,
        cargo:           'oof',
        market:          'rab',
        cargoDamage:     4000,
        deliveryTime:    5000,
        distance:        6000,
        earnedXP:        7000,
        finishingTime:   8000,
        plannedDistance: 4101,
        revenue:         9000,
        startingTime:    1100,
        destination:     {foo: 'zab'},
        source:          {bar: 'xuq'},
      },
      {
        autoParked:      true,
        isSpecial:       false,
        cargo:           'oof',
        market:          'rab',
        cargoDamage:     4000,
        deliveryTime:    5000,
        distance:        6000,
        earnedXP:        7000,
        finishingTime:   8000,
        plannedDistance: 4103,
        revenue:         9000,
        startingTime:    1100,
        destination:     {foo: 'zab'},
        source:          {bar: 'xuq'},
      }
    ]

    assert.deepStrictEqual(
      telemetry.job.emit.args.filter(event => event[0] === 'delivered'),
      [
        ['delivered', expectedData[0]],
        ['delivered', expectedData[1]],
      ]
    )
  })

})
