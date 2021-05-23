const assert    = require('assert')
const sinon     = require('sinon')
const cloneDeep = require('lodash.clonedeep')

const tst = require('../../lib')

const functions = require('../../lib/functions')

describe('eventEmitters/job()', function() {

  let clock    = null

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
          penalty:       1001,
          startingTime:  1002,
        },
        delivered: {
          active:          false,
          autoParked:      true,
          cargoDamage:     2000,
          deliveryTime:    2001,
          distance:        2002,
          earnedXP:        2003,
          finishingTime:   2004,
          revenue:         2005,
          startingTime:    2006,
        },
      }
    },
    job: {
      isSpecial:       true,
      cargo:           'foo',
      market:          'bar',
      deliveryTime:    3000,
      income:          3001,
      plannedDistance: 3002,
      destination:     {foo: 'bar'},
      source:          {bar: 'baz'},
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
      .callsFake(() => cloneDeep(testData))

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
    const expectedData = {
      autoLoaded:      true,
      isSpecial:       true,
      cargo:           'foo',
      market:          'bar',
      deliveryTime:    3000,
      income:          3001,
      plannedDistance: 3002,
      destination:     {foo: 'bar'},
      source:          {bar: 'baz'},
    }

    assert.deepStrictEqual(
      telemetry.job.emit.args.filter(event => event[0] === 'started'),
      [
        ['started', expectedData],
        ['started', expectedData],
      ]
    )
  })
  
  it('Should emit "cancelled" events', function() {
    const expectedData = {
      isSpecial:       true,
      cargo:           'foo',
      market:          'bar',
      deliveryTime:    3000,
      finishingTime:   1000,
      income:          0,
      penalty:         1001,
      plannedDistance: 3002,
      startingTime:    1002,
      destination:     {foo: 'bar'},
      source:          {bar: 'baz'},
    }

    assert.deepStrictEqual(
      telemetry.job.emit.args.filter(event => event[0] === 'cancelled'),
      [
        ['cancelled', expectedData],
        ['cancelled', expectedData],
      ]
    )
  })

  it('Should emit "delivered" events', function() {
    const expectedData = {
      autoParked:      true,
      isSpecial:       true,
      cargo:           'foo',
      market:          'bar',
      cargoDamage:     2000,
      deliveryTime:    2001,
      distance:        2002,
      earnedXP:        2003,
      finishingTime:   2004,
      plannedDistance: 3002,
      revenue:         2005,
      startingTime:    2006,
      destination:     {foo: 'bar'},
      source:          {bar: 'baz'},
    }

    assert.deepStrictEqual(
      telemetry.job.emit.args.filter(event => event[0] === 'delivered'),
      [
        ['delivered', expectedData],
        ['delivered', expectedData],
      ]
    )
  })

})
