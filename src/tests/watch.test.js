import assert    from "assert"
import sinon     from "sinon"
import fs        from "fs"
import path      from "path"
import cloneDeep from "lodash.clonedeep"

import truckSimTelemetry from "../lib"

import watch         from "../lib/watch"
import * as getData  from "../lib/getData"

import * as eventEmittersGame       from "../lib/eventEmitters/game"
import * as eventEmittersJob        from "../lib/eventEmitters/job"
import * as eventEmittersNavigation from "../lib/eventEmitters/navigation"
import * as eventEmittersTruck      from "../lib/eventEmitters/truck"
import * as eventEmittersTrailers   from "../lib/eventEmitters/trailers"

describe("watch()", function() {

  let clock, data, datas
  const spies = {}
  const stubs = {}

  before(function() {
    data = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./data/scs_sdk_plugin_parsed_data_10.json")))

    clock = sinon.useFakeTimers()

    spies.update = sinon.spy()

    stubs.getData = sinon.stub(getData, "default").callsFake(function() {
      return datas[getData.default.args.length - 1] || datas[0]
    })

    stubs.game       = sinon.stub(eventEmittersGame,       "default")
    stubs.job        = sinon.stub(eventEmittersJob,        "default")
    stubs.navigation = sinon.stub(eventEmittersNavigation, "default")
    stubs.truck      = sinon.stub(eventEmittersTruck,      "default")
    stubs.trailers   = sinon.stub(eventEmittersTrailers,   "default")
  })

  beforeEach(function() {
    datas = [cloneDeep(data)]
  })

  afterEach(function() {
    for (const spy in spies) {
      spies[spy].resetHistory()
    }

    for (const stub in stubs) {
      stubs[stub].resetHistory()
    }
  })

  after(function() {
    clock.restore()

    for (const stub in stubs) {
      stubs[stub].restore()
    }
  })

  it("Should ensure the opts object exists and the interval property is 100ms or more", function() {
    const testCases = [
      {opts: undefined,            tick: 100, callCount: 2},
      {opts: null,                 tick: 100, callCount: 2},
      {opts: {},                   tick: 100, callCount: 2},
      {opts: {interval: 200},      tick: 200, callCount: 2},
      {opts: {interval: "200"},    tick: 200, callCount: 2},
      {opts: {interval: 1},        tick: 10,  callCount: 2},
      {opts: {interval: "foobar"}, tick: 100, callCount: 2},
    ]

    for (const testCase of testCases) {
      const telemetry = truckSimTelemetry()

      watch(testCase.opts, spies.update, telemetry)

      clock.tick(testCase.tick)
      telemetry.stop()
      clock.reset()

      assert.equal(stubs.getData.args.length, testCase.callCount)

      stubs.getData.resetHistory()
    }
  })

  it("Should emit a connected and disconnected events when the SDK toggles", function() {
    datas[1] = cloneDeep(data)
    datas[2] = cloneDeep(data)

    datas[1].game.sdkActive = false
    datas[2].game.sdkActive = true

    const telemetry = truckSimTelemetry()
    const spy = sinon.spy()

    telemetry.game.once("connected", spy)
    telemetry.game.once("disconnected", spy)

    watch({interval: 10}, spies.update, telemetry)
    clock.tick(10)
    telemetry.stop()
    clock.reset()

    assert.equal(spy.args.length, 2)
    assert.equal(spies.update.args.length, 1)
  })

  it("Should update the data properties of the telemetry object", function() {
    const telemetry = truckSimTelemetry()

    watch({interval: 10}, spies.update, telemetry)
    clock.tick(10)
    telemetry.stop()
    clock.reset()

    assert.deepEqual(telemetry.data.game,       data.game)
    assert.deepEqual(telemetry.data.controls,   data.controls)
    assert.deepEqual(telemetry.data.job,        data.job)
    assert.deepEqual(telemetry.data.navigation, data.navigation)
    assert.deepEqual(telemetry.data.truck,      data.truck)
    assert.deepEqual(telemetry.data.trailers,   data.trailers)
    assert.deepEqual(telemetry.data.trailer,    data.trailer)
  })

  it("Should run event emitters", function() {
    datas[1] = cloneDeep(data)

    const telemetry = truckSimTelemetry()

    watch({interval: 10}, spies.update, telemetry)
    clock.tick(10)
    telemetry.stop()
    clock.reset()

    assert.deepEqual(stubs.game.args[0],       [telemetry, [datas[1], datas[0]]])
    assert.deepEqual(stubs.job.args[0],        [telemetry, [datas[1], datas[0]]])
    assert.deepEqual(stubs.navigation.args[0], [telemetry, [datas[1], datas[0]]])
    assert.deepEqual(stubs.truck.args[0],      [telemetry, [datas[1], datas[0]]])
    assert.deepEqual(stubs.trailers.args[0],   [telemetry, [datas[1], datas[0]]])

  })

  it("Should quit early if a watcher already exists", function() {
    const telemetry = truckSimTelemetry()

    telemetry.watcher = "foobar"

    watch({interval: 10}, spies.update, telemetry)
    clock.tick(10)
    telemetry.stop()
    clock.reset()

    assert.equal(stubs.getData.args.length, 0)
  })

  it("Should handle there being no data", function() {
    stubs.getData.callsFake(function() {
      return undefined
    })

    const telemetry = truckSimTelemetry()

    watch({interval: 10}, spies.update, telemetry)
    clock.tick(10)
    telemetry.stop()
    clock.reset()

    assert.deepEqual(stubs.game.args.length,       0)
    assert.deepEqual(stubs.job.args.length,        0)
    assert.deepEqual(stubs.navigation.args.length, 0)
    assert.deepEqual(stubs.truck.args.length,      0)
    assert.deepEqual(stubs.trailers.args.length,   0)
  })

})