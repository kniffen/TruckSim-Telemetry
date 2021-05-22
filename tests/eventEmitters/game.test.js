const assert    = require('assert')
const sinon     = require('sinon')
const cloneDeep = require('lodash.clonedeep')

const tst = require('../../lib')

const getData = require('../../lib/getData')

describe('eventEmitters/game()', function() {

  let clock = null

  let testData = {
    events: {
      ferry:      {active: false, destination: 'foo'},
      fine:       {active: false, bar: 'baz'},
      refuelPaid: {active: false, baz: 'qux'},
      tollgate:   {active: false, qux: 'quux'},
      train:      {active: false, destination: 'quuz'},
    },
    game: {
      paused: false,
      time: {foo: 'bar'}
    },
    trailers: [],
    navigation: {},
  }

  const telemetry = tst()

  before(function() {
    clock = sinon.useFakeTimers()
    
    sinon.spy(telemetry.game, 'emit')
    sinon.stub(getData, 'default').callsFake(() => cloneDeep(testData))
  
    telemetry.watch()

    clock.tick(100)

    testData.game.paused = true
    testData.game.time = {bar: 'foo'}

    testData.events.ferry.active      = true
    testData.events.fine.active       = true
    testData.events.refuelPaid.active = true
    testData.events.tollgate.active   = true
    testData.events.train.active      = true

    clock.tick(100)

    testData.game.paused = false
    testData.game.time.bar = 'baz'

    testData.events.ferry.active      = false
    testData.events.fine.active       = false
    testData.events.refuelPaid.active = false
    testData.events.tollgate.active   = false
    testData.events.train.active      = false

    clock.tick(100)

    testData.game.paused = true
    testData.game.time = {bar: 'qux'}

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
      ['time-change', {bar: 'foo'}, {foo: 'bar'}],
      ['time-change', {bar: 'baz'}, {bar: 'foo'}],
      ['time-change', {bar: 'qux'}, {bar: 'baz'}],
    ])
  })

  it('Should emit "ferry" events', function() {
    const ferryEvents = telemetry.game.emit.args.filter(event => event[0] === 'ferry')

    assert.deepStrictEqual(ferryEvents, [
      ['ferry', {destination: 'foo', target: 'foo'}],
      ['ferry', {destination: 'foo', target: 'foo'}],
    ])
  })

  
  it('Should emit "fine" events', function() {
    assert.deepStrictEqual(
      telemetry.game.emit.args.filter(event => event[0] === 'fine'),
      [
        ['fine', {bar: 'baz'}],
        ['fine', {bar: 'baz'}],
      ]
   )
  })

  it('Should emit "refuel-paid" events', function() {
    assert.deepStrictEqual(
      telemetry.game.emit.args.filter(event => event[0] === 'refuel-paid'),
      [
        ['refuel-paid', {baz: 'qux'}],
        ['refuel-paid', {baz: 'qux'}],
      ]
   )
  } )


  it('Should emit "tollgate" events', function() {
    assert.deepStrictEqual(
      telemetry.game.emit.args.filter(event => event[0] === 'tollgate'),
      [
        ['tollgate', {qux: 'quux'}],
        ['tollgate', {qux: 'quux'}],
    ])
  })


  it('Should emit "train" events', function() {
    assert.deepStrictEqual(
      telemetry.game.emit.args.filter(event => event[0] === 'train'),
      [
        ['train', {destination: 'quuz', target: 'quuz'}],
        ['train', {destination: 'quuz', target: 'quuz'}],
      ]
   )
  })

})
