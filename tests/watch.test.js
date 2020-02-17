const assert       = require("assert")
const sinon        = require("sinon")
const EventEmitter = require("events")
const watch        = require("../src/watch")

describe("watch()", function() {

  const setIntervalMock = sinon.spy((cb, interval) => {
    for (let i = 0; i < 10; i++) {
      data.counter++

      if ([2, 4].includes(data.counter)) {
        data.game.sdkActive = true
      } else {
        data.game.sdkActive = false
      }

      cb()
    }
  })

  const scsSDKTelemetry  = "foo"
  const converters       = "bar"
  const eventEmitters    = {foobar: sinon.spy()}
  let telemetry
  const getBuffer        = "baz"
  const getData          = sinon.spy(() => data && data.counter == 5 ? undefined : data)
  const getPluginVersion = "qux"
  const parseData        = "quux"
  const opts             = null
  const data             = {}

  const spies = {
    update:       sinon.spy(),
    connected:    sinon.spy(),
    disconnected: sinon.spy(),
  }

  beforeEach(function() {
    telemetry = {
      game: new EventEmitter(),
      data: {
        game: {}
      }
    }

    data.counter = 0
    
    data.game = {
      sdkActive: false
    }
    
    telemetry.game.on("connected",    spies.connected)
    telemetry.game.on("disconnected", spies.disconnected)
    
    sinon.reset()
  })

  it("Should ensure the opts object exists and the interval property is 100ms or more", function() {
    watch(setIntervalMock, scsSDKTelemetry, converters,  eventEmitters, telemetry,  getBuffer, getData, getPluginVersion, parseData, opts,            spies.update)
    watch(setIntervalMock, scsSDKTelemetry, converters,  eventEmitters, telemetry,  getBuffer, getData, getPluginVersion, parseData, {interval: 200}, spies.update)
    watch(setIntervalMock, scsSDKTelemetry, converters,  eventEmitters, telemetry,  getBuffer, getData, getPluginVersion, parseData, {interval: 1},   spies.update)

    assert.deepEqual(setIntervalMock.args[0][1], 100)
    assert.deepEqual(setIntervalMock.args[1][1], 200)
    assert.deepEqual(setIntervalMock.args[2][1], 10)
  
    assert.deepEqual(getData.args[0], [null, scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData])
  })
  
  it("Should emit a connected and disconnected events when the SDK toggles", function() {
    watch(setIntervalMock, scsSDKTelemetry, converters,  eventEmitters, telemetry,  getBuffer, getData, getPluginVersion, parseData, opts,            spies.update)

    assert.equal(spies.connected.args.length, 2)
    assert.equal(spies.disconnected.args.length, 2)
  })

  it("Should handle there being no data", function() {
    watch(setIntervalMock, scsSDKTelemetry, converters,  eventEmitters, telemetry,  getBuffer, () => undefined, getPluginVersion, parseData, opts,            spies.update)

  
    assert.equal(eventEmitters.foobar.args.length, 0)
  })

  it("Should update the data properties of the telemetry object", function() {
    watch(setIntervalMock, scsSDKTelemetry, converters,  eventEmitters, telemetry,  getBuffer, getData, getPluginVersion, parseData, opts,            spies.update)
    
    assert.deepEqual(telemetry.data.game, data.game)
  })

  it("Should run event emitters", function() {
    watch(setIntervalMock, scsSDKTelemetry, converters,  eventEmitters, telemetry,  getBuffer, getData, getPluginVersion, parseData, opts,            spies.update)
    
    const expectedTelemetry = Object.assign({watcher: () => {}}, telemetry)
    
    const expectedData = [
      [
        { game: { sdkActive: false }, counter: 0 },
        { game: { sdkActive: false }, counter: 0 },
      ],
      [
        { game: { sdkActive: false }, counter: 1 },
        { game: { sdkActive: false }, counter: 0 },
      ],
      [
        { game: { sdkActive: true  }, counter: 2 },
        { game: { sdkActive: false }, counter: 1 },
      ],
      [
        { game: { sdkActive: false }, counter: 3 },
        { game: { sdkActive: true  }, counter: 2 },
      ],
      [
        { game: { sdkActive: true  }, counter: 4 },
        { game: { sdkActive: false }, counter: 3 },
      ],
      [
        { game: { sdkActive: false }, counter: 6 },
        { game: { sdkActive: false }, counter: 6 },
      ],
      [
        { game: { sdkActive: false }, counter: 7 },
        { game: { sdkActive: false }, counter: 6 },
      ],
      [
        { game: { sdkActive: false }, counter: 8 },
        { game: { sdkActive: false }, counter: 7 },
      ],
      [
        { game: { sdkActive: false }, counter: 9 },
        { game: { sdkActive: false }, counter: 8 },
      ],
      [
        { game: { sdkActive: false }, counter: 10 },
        { game: { sdkActive: false }, counter: 9 },
      ],
    ]

    for (let i = 0; i < expectedData.length; i++) {
      assert.deepEqual(eventEmitters.foobar.args[i], [expectedTelemetry, expectedData[i]])
    }

  })

  it("Should quit early if a watcher already exists", function() {
    telemetry.watcher = () => {}

    watch(setIntervalMock, scsSDKTelemetry, converters,  eventEmitters, telemetry,  getBuffer, getData, getPluginVersion, parseData, opts,            spies.update)

    assert.equal(setIntervalMock.args.length, 0)
  })

  it("Should run the update callback if the object has changed", function() {
    watch(setIntervalMock, scsSDKTelemetry, converters,  eventEmitters, telemetry,  getBuffer, getData, getPluginVersion, parseData, opts,            spies.update)

    assert.deepEqual(spies.update.args, [
      [{counter: 10, game: {sdkActive: false}}],
      [{counter: 10, game: {sdkActive: false}}],
      [{counter: 10, game: {sdkActive: false}}],
      [{counter: 10, game: {sdkActive: false}}],
      [{counter: 10, game: {sdkActive: false}}],
      [{counter: 10, game: {sdkActive: false}}],
      [{counter: 10, game: {sdkActive: false}}],
      [{counter: 10, game: {sdkActive: false}}],
    ])
  })

})