const assert    = require('assert')
const sinon     = require('sinon')
const cloneDeep = require('lodash.clonedeep')

const tst = require('../../lib')

const functions = require('../../lib/functions')

const getFakeData = require('../getFakeData')

describe('eventEmitters/game()', function() {

  let clock = null

  const testData = getFakeData(function(data) {
    data.events.ferry.active      = false
    data.events.train.active      = false
    data.events.fine.active       = false
    data.events.refuelPaid.active = false
    data.events.tollgate.active   = false

    data.game.paused = false

    data.game.time.value = 0
    data.game.time.unix  = 0
  })

  const telemetry = tst()

  before(function() {
    clock = sinon.useFakeTimers()
    
    sinon.spy(telemetry.game, 'emit')

    sinon
      .stub(functions, 'getData')
      .callsFake(() => cloneDeep(testData))
  
    telemetry.watch()

    clock.tick(100)

    testData.game.paused = true
    testData.game.time.value++

    testData.events.ferry.active      = true
    testData.events.fine.active       = true
    testData.events.refuelPaid.active = true
    testData.events.tollgate.active   = true
    testData.events.train.active      = true

    clock.tick(100)

    testData.game.paused = false
    testData.game.time.value++

    testData.events.ferry.active      = false
    testData.events.fine.active       = false
    testData.events.refuelPaid.active = false
    testData.events.tollgate.active   = false
    testData.events.train.active      = false

    clock.tick(100)

    testData.game.paused = true
    testData.game.time.value++

    testData.events.ferry.active      = true
    testData.events.fine.active       = true
    testData.events.refuelPaid.active = true
    testData.events.tollgate.active   = true
    testData.events.train.active      = true

    clock.tick(100)

    telemetry.stop()
  })

  after(function() {
    clock.restore()
    sinon.restore()
  })

  it('Should emit "pause" events', function() {
    const pauseEvents = telemetry.game.emit.args.filter(event => event[0] === 'pause')

    assert.deepStrictEqual(pauseEvents, [
      ['pause', true],
      ['pause', false],
      ['pause', true],
    ])
  })

  it('Should emit "time-change" events', function() {
    const timeChangeEvents = telemetry.game.emit.args.filter(event => event[0] === 'time-change')

    assert.deepStrictEqual(timeChangeEvents, [
      ['time-change', {value: 1, unix: 0}, {value: 0, unix: 0}],
      ['time-change', {value: 2, unix: 0}, {value: 1, unix: 0}],
      ['time-change', {value: 3, unix: 0}, {value: 2, unix: 0}],
    ])
  })

  it('Should emit "ferry" events', function() {
    const expected = {
      amount: 0,
      destination: {id: '', name: ''},
      source:      {id: '', name: ''},
      target:      {id: '', name: ''},
    }

    const ferryEvents = telemetry.game.emit.args.filter(event => event[0] === 'ferry')

    assert.deepStrictEqual(ferryEvents, [
      ['ferry', expected],
      ['ferry', expected],
    ])
  })

  
  it('Should emit "fine" events', function() {
    const expected = {
      amount: 0,
      offence: {id: '', name: ''}
    }

    assert.deepStrictEqual(
      telemetry.game.emit.args.filter(event => event[0] === 'fine'),
      [
        ['fine', expected],
        ['fine', expected],
      ]
   )
  })

  it('Should emit "refuel-paid" events', function() {
    const expected = {
      amount: 0,
    }

    assert.deepStrictEqual(
      telemetry.game.emit.args.filter(event => event[0] === 'refuel-paid'),
      [
        ['refuel-paid', expected],
        ['refuel-paid', expected],
      ]
   )
  } )


  it('Should emit "tollgate" events', function() {
     const expected = {
      amount: 0,
    }

    assert.deepStrictEqual(
      telemetry.game.emit.args.filter(event => event[0] === 'tollgate'),
      [
        ['tollgate', expected],
        ['tollgate', expected],
    ])
  })


  it('Should emit "train" events', function() {
    const expected = {
      amount: 0,
      destination: {id: '', name: ''},
      source:      {id: '', name: ''},
      target:      {id: '', name: ''},
    }

    assert.deepStrictEqual(
      telemetry.game.emit.args.filter(event => event[0] === 'train'),
      [
        ['train', expected],
        ['train', expected],
      ]
   )
  })

})
