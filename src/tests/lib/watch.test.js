import assert       from "assert"
import sinon        from "sinon"
import EventEmitter from "events"
import watch        from "../../lib/watch"

describe("watch()", function() {

  let telemetry
  const opts  = null
  const data  = {}
  const spies = {
    update:       sinon.spy(),
    connected:    sinon.spy(),
    disconnected: sinon.spy(),
  }

  const _setInterval = sinon.spy((cb, interval) => {
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

  const getData = () => data && data.counter == 5 ? undefined : data

  const eventEmitters = [sinon.spy()]

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
    watch(telemetry, opts,            spies.update, _setInterval, getData, eventEmitters)
    watch(telemetry, {interval: 200}, spies.update, _setInterval, getData, eventEmitters)
    watch(telemetry, {interval: 1},   spies.update, _setInterval, getData, eventEmitters)

    assert.deepEqual(_setInterval.args[0][1], 100)
    assert.deepEqual(_setInterval.args[1][1], 200)
    assert.deepEqual(_setInterval.args[2][1], 10)
  })
  
  it("Should emit a connected and disconnected events when the SDK toggles", function() {
    watch(telemetry, opts, spies.update, _setInterval, getData, eventEmitters)

    assert.equal(spies.connected.args.length, 2)
    assert.equal(spies.disconnected.args.length, 2)
  })

  it("Should handle there being no data", function() {
    watch(telemetry, opts, spies.update, _setInterval, () => undefined, eventEmitters)
  
    assert.equal(eventEmitters[0].args.length, 0)
  })

  it("Should update the data properties of the telemetry object", function() {
    watch(telemetry, opts, spies.update, _setInterval, getData, eventEmitters)

    assert.deepEqual(telemetry.data.game, data.game)
  })

  it("Should run event emitters", function() {
    watch(telemetry, opts, spies.update, _setInterval, getData, eventEmitters)

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
      assert.deepEqual(eventEmitters[0].args[i], [expectedTelemetry, expectedData[i]])
    }

  })

  it("Should quit early if a watcher already exists", function() {
    telemetry.watcher = () => {}

    watch(telemetry, opts, spies.update, _setInterval, getData, eventEmitters)

    assert.equal(_setInterval.args.length, 0)
  })

  it("Should run the update callback if the object has changed", function() {
    watch(telemetry, opts, spies.update, _setInterval, getData, eventEmitters)

    assert.equal(spies.update.args.length, 8)
  })

})