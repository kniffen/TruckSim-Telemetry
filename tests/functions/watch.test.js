const assert    = require('assert')
const sinon     = require('sinon')
const cloneDeep = require('lodash.clonedeep')

const truckSimTelemetry = require('../../lib')

const functions = require('../../lib/functions')

describe('watch()', function() {

  let clock    = null
  let testData = null

  before(function() {
    clock = sinon.useFakeTimers()

    sinon
      .stub(functions, 'getData')
      .callsFake(() => cloneDeep(testData))
  })

  beforeEach(function() {
    testData = {
      game:       {},
      events:     {},
      navigation: {},
      trailers:   [],
    }
  })

  afterEach(function() {
    clock.reset()
  })

  after(function() {
    clock.restore()
    sinon.restore()
  })

  it('Should ensure the opts object exists and the interval property is 100ms or more', function() {
    const telemetry = truckSimTelemetry()
    const update    = sinon.spy()

    testData = null

    const testCases = [
      {opts: undefined,            ticks: 100},
      {opts: null,                 ticks: 100},
      {opts: {},                   ticks: 100},
      {opts: 'foo',                ticks: 100},
      {opts: 200,                  ticks: 100},
      {opts: true,                 ticks: 100},
      {opts: [],                   ticks: 100},
      {opts: {interval: 200},      ticks: 200},
      {opts: {interval: '200'},    ticks: 200},
      {opts: {interval: 1},        ticks: 10}, 
      {opts: {interval: 'foobar'}, ticks: 100},
    ]

    for (const testCase of testCases) {
      telemetry.watch(testCase.opts, update)

      clock.tick(testCase.ticks)
      telemetry.stop()
      clock.reset()
    }

    assert.deepStrictEqual(
      functions.getData.args,
      [
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
        [null, {mmfName: 'Local\\SCSTelemetry'}],
      ]
    )

    assert.equal(update.args.length, 0)
  })

  it('Should emit a connected and disconnected events when the SDK toggles', function() {
    const telemetry = truckSimTelemetry()

    const gameEventEmitterStub = sinon.stub(telemetry.game, 'emit')

    testData = {
      game: {sdkActive: false},
      events:     {},
      navigation: {},
      trailers:   [],
    }

    telemetry.watch()
    clock.tick(100)
    testData.game.sdkActive = true
    clock.tick(100)
    testData.game.sdkActive = false
    clock.tick(100)
    testData.game.sdkActive = true
    clock.tick(100)
    testData.game.sdkActive = false
    clock.tick(100)
    telemetry.stop()

    assert.deepStrictEqual(gameEventEmitterStub.args, [
      ['connected'],
      ['disconnected'],
      ['connected'],
      ['disconnected'],
    ])

    gameEventEmitterStub.restore()
  })

  it('Should update the data properties of the telemetry object', function() {
    const telemetry = truckSimTelemetry()
    const update    = sinon.spy()

    testData.game       = {paused: false}
    testData.job        = {foo: 'bar'}
    testData.navigation = {bar: 'foo'}
    testData.trailers   = ['foo', 'qux']
    testData.truck      = {quux: 'quuz'}

    telemetry.watch(null, update)
    
    clock.tick(100)
    testData.game.paused = true
    clock.tick(100)
    testData.game.paused = false
    clock.tick(500)

    telemetry.stop()

    assert.deepStrictEqual(
      telemetry.data,
      {
        controls:   {},
        game:       {paused: false},
        job:        {foo: 'bar'},
        navigation: {bar: 'foo'},
        trailers:   ['foo', 'qux'],
        trailer:    {},
        truck:      {quux: 'quuz'},   
      }
   )

    assert.deepStrictEqual(
      update.args,
      [
        [
          {
            events:     {},
            game:       {paused: true},
            job:        {foo: 'bar'},
            navigation: {bar: 'foo'},
            trailers:   ['foo', 'qux'],
            truck:      {quux: 'quuz'},   
          }
        ],
        [
          {
            events:     {},
            game:       {paused: false},
            job:        {foo: 'bar'},
            navigation: {bar: 'foo'},
            trailers:   ['foo', 'qux'],
            truck:      {quux: 'quuz'},   
          }
        ],
      ]
    )
  })

  it('Should quit early if a watcher already exists', function() {
    const telemetry = truckSimTelemetry()
    const update    = sinon.spy()

    testData = {
      game:       {paused: false},
      events:     {},
      navigation: {},
      trailers:   [],
    }

    telemetry.watch(null, update)
    telemetry.watch(null, update)
    clock.tick(500)
    testData.game.paused = true
    telemetry.watch(null, update)
    clock.tick(500)
    testData.game.paused = false
    clock.tick(500)
    telemetry.stop()
    clock.tick(500)

    assert.equal(update.args.length, 2)
  })

  it('What happens in the update callback should not affect the data in event emitters', function() {
    const telemetry = truckSimTelemetry()

    telemetry.game.on('time-change', function(a, b) {
      a.bar = 'baz'
      b.baz = 'qux'
    })

    sinon.stub(telemetry.game, 'emit')

    testData = {
      game: {
        time: {value: 0}
      },
      events: {},
      navigation: {},
      trailers: []
    }

    telemetry.watch(null, function(data) {
      data.game.time.foo = 'foobar'
    })

    clock.tick(100)
    testData.game.time.value = 1
    clock.tick(100)
    testData.game.time.value = 2
    clock.tick(100)

    assert.deepStrictEqual(telemetry.game.emit.args, [
      ['time-change', {value: 1}, {value: 0}],
      ['time-change', {value: 2}, {value: 1}],
    ])

    telemetry.game.emit.restore()
  })

  it('What happens in event emitters should not affect the data in the update callback', function() {
    const telemetry = truckSimTelemetry()

    const update = sinon.spy()

    telemetry.game.on('time-change', function(a, b) {
      a.bar = 'baz'
      b.baz = 'qux'
    })

    testData = {
      game: {
        time: {value: 0}
      },
      events: {},
      navigation: {},
      trailers: []
    }

    telemetry.watch(null, update)

    clock.tick(100)
    testData.game.time.value = 1
    clock.tick(100)
    testData.game.time.value = 2
    clock.tick(100)

    assert.deepStrictEqual(update.args[0][0].game.time, {value: 1})
    assert.deepStrictEqual(update.args[1][0].game.time, {value: 2})
  })

  it('Should only run the update callback when the state changes', function() {
    const telemetry = truckSimTelemetry()
    const update    = sinon.spy()

    telemetry.watch(null, update)

    clock.tick(200)

    testData = {
      game:       {paused: false},
      events:     {},
      navigation: {},
      trailers:   [],
    }

    clock.tick(200)

    testData.paused = true
    clock.tick(500)

    testData.paused = false
    clock.tick(500)

    assert.deepStrictEqual(update.args.length, 3)
  })

})