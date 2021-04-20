import assert    from "assert"
import sinon     from "sinon"
import fs        from "fs"
import path      from "path"
import cloneDeep from "lodash.clonedeep"

import truckSimTelemetry from "../src"

import watch         from "../src/watch"
import * as getData  from "../src/getData"

import * as eventEmittersGame       from "../src/eventEmitters/game"
import * as eventEmittersJob        from "../src/eventEmitters/job"
import * as eventEmittersNavigation from "../src/eventEmitters/navigation"
import * as eventEmittersTruck      from "../src/eventEmitters/truck"
import * as eventEmittersTrailers   from "../src/eventEmitters/trailers"

describe("watch()", function() {

  let clock, data, datas, update
  const opts  = {mmfName: "foobar"}
  
  const sandbox = sinon.createSandbox()

  before(function() {
    data = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./data/scs_sdk_plugin_parsed_data_10.json")))

    clock = sinon.useFakeTimers()

    update = sandbox.spy()

    sandbox.stub(getData, "default").callsFake(function() {
      return datas[getData.default.args.length - 1] || datas[0]
    })

    sandbox.stub(eventEmittersGame,       "default")
    sandbox.stub(eventEmittersJob,        "default")
    sandbox.stub(eventEmittersNavigation, "default")
    sandbox.stub(eventEmittersTruck,      "default")
    sandbox.stub(eventEmittersTrailers,   "default")
  })

  beforeEach(function() {
    datas = [cloneDeep(data)]
  })

  afterEach(function() {
    sandbox.resetHistory()
  })

  after(function() {
    sandbox.restore()
  })

  it("Should ensure the opts object exists and the interval property is 100ms or more", function() {
    const testCases = [
      {opts: undefined,            tick: 100},
      {opts: null,                 tick: 100},
      {opts: {},                   tick: 100},
      {opts: {interval: 200},      tick: 200},
      {opts: {interval: "200"},    tick: 200},
      {opts: {interval: 1},        tick: 10},
      {opts: {interval: "foobar"}, tick: 100},
    ]

    for (const testCase of testCases) {
      const telemetry = truckSimTelemetry(opts)

      watch(testCase.opts, update, telemetry)

      clock.tick(testCase.tick)
      telemetry.stop()
      clock.reset()

      assert.deepEqual(getData.default.args, [[null, opts], [null, opts]])

      getData.default.resetHistory()
    }
  })

  it("Should emit a connected and disconnected events when the SDK toggles", function() {
    datas[1] = cloneDeep(data)
    datas[2] = cloneDeep(data)

    datas[1].game.sdkActive = false
    datas[2].game.sdkActive = true

    const telemetry = truckSimTelemetry(opts)
    const spy       = sinon.spy()

    telemetry.game.once("connected",    spy)
    telemetry.game.once("disconnected", spy)

    watch({interval: 10}, update, telemetry)
    clock.tick(10)
    telemetry.stop()
    clock.reset()

    assert.equal(spy.args.length, 2)
    assert.equal(update.args.length, 1)
  })

  it("Should update the data properties of the telemetry object", function() {
    const telemetry = truckSimTelemetry(opts)

    watch({interval: 10}, update, telemetry)
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

    const telemetry = truckSimTelemetry(opts)

    watch({interval: 10}, update, telemetry)
    clock.tick(10)
    telemetry.stop()
    clock.reset()

    assert.deepEqual(eventEmittersGame.default.args[0],       [telemetry, [datas[1], datas[0]]])
    assert.deepEqual(eventEmittersJob.default.args[0],        [telemetry, [datas[1], datas[0]]])
    assert.deepEqual(eventEmittersNavigation.default.args[0], [telemetry, [datas[1], datas[0]]])
    assert.deepEqual(eventEmittersTruck.default.args[0],      [telemetry, [datas[1], datas[0]]])
    assert.deepEqual(eventEmittersTrailers.default.args[0],   [telemetry, [datas[1], datas[0]]])
  })

  it("Should quit early if a watcher already exists", function() {
    const telemetry = truckSimTelemetry(opts)

    telemetry.watcher = "foobar"

    watch({interval: 10}, update, telemetry)
    clock.tick(10)
    telemetry.stop()
    clock.reset()

    assert.equal(getData.default.args.length, 0)
  })

  it("Should handle there being no data", function() {
    getData.default.restore()
    sandbox.stub(getData, "default").callsFake(function() {
      return undefined
    })

    const telemetry = truckSimTelemetry(opts)

    watch({interval: 10}, update, telemetry)
    clock.tick(10)
    telemetry.stop()
    clock.reset()

    assert.equal(eventEmittersGame.default.args.length,       0)
    assert.equal(eventEmittersJob.default.args.length,        0)
    assert.equal(eventEmittersNavigation.default.args.length, 0)
    assert.equal(eventEmittersTruck.default.args.length,      0)
    assert.equal(eventEmittersTrailers.default.args.length,   0)
  })

})