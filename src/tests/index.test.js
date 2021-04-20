import assert       from "assert"
import sinon        from "sinon"
import EventEmitter from "events"
import fs           from "fs"
import path         from "path"

import truckSimTelemetry from "../lib"

import * as getBuffer from "../lib/getBuffer"
import * as getData   from "../lib/getData"

import watch from "../lib/watch"
import stop  from "../lib/stop"

describe("truckSimTelemetry()", function() {

  let buffer, data
  const defaultOpts = {
    mmfName: "Local\\SCSTelemetry"
  }

  const sandbox = sinon.createSandbox()

  before(function() {
    buffer = fs.readFileSync(path.resolve(__dirname, "./buffers/scs_sdk_plugin_buffer_10"))
    data   = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./data/scs_sdk_plugin_parsed_data_10.json")))

    sandbox.stub(getBuffer, "default").callsFake(function() {
      return buffer
    })

    sandbox.spy(getData, "default")
  })

  after(function() {
    sandbox.restore()
  })

  afterEach(function() {
    sandbox.resetHistory()
  })

  it("should return a telemetry object", function() {
    const telemetry    = truckSimTelemetry()
    const eventEmitter = new EventEmitter()
    
    assert.deepEqual(telemetry.game,       eventEmitter)
    assert.deepEqual(telemetry.navigation, eventEmitter)
    assert.deepEqual(telemetry.job,        eventEmitter)
    assert.deepEqual(telemetry.truck,      eventEmitter)
    assert.deepEqual(telemetry.trailers,   eventEmitter)
    assert.deepEqual(telemetry.trailer,    eventEmitter)

    assert.deepEqual(telemetry.data, {
      game:       {},
      controls:   {},
      job:        {},
      navigation: {},
      truck:      {},
      trailers:   {},
      trailer:    {},
    })

    assert.deepEqual(telemetry.opts, defaultOpts)

    assert.deepEqual(telemetry.getBuffer(),     buffer)
    assert.deepEqual(telemetry.getData(),       data)
    assert.deepEqual(telemetry.getGame(),       data.game)
    assert.deepEqual(telemetry.getControls(),   data.controls)
    assert.deepEqual(telemetry.getJob(),        data.job)
    assert.deepEqual(telemetry.getNavigation(), data.navigation)
    assert.deepEqual(telemetry.getTruck(),      data.truck)
    assert.deepEqual(telemetry.getTrailers(),   data.trailers)
    assert.deepEqual(telemetry.getTrailer(),    data.trailer)

    assert.deepEqual(getBuffer.default.args, [
      [defaultOpts],
      [defaultOpts],
      [defaultOpts],
      [defaultOpts],
      [defaultOpts],
      [defaultOpts],
      [defaultOpts],
      [defaultOpts],
      [defaultOpts],
    ])

    assert.deepEqual(getData.default.args, [
      [null,         defaultOpts],
      ["game",       defaultOpts],
      ["controls",   defaultOpts],
      ["job",        defaultOpts],
      ["navigation", defaultOpts],
      ["truck",      defaultOpts],
      ["trailers",   defaultOpts],
      ["trailer",    defaultOpts],
    ])
  })

  it("should accept options", function() {
    const opts      = {mmfName: "foobar"}
    const telemetry = truckSimTelemetry(opts)
  
    assert.deepEqual(telemetry.opts, opts)

    assert.deepEqual(telemetry.getBuffer(),     buffer)
    assert.deepEqual(telemetry.getData(),       data)
    assert.deepEqual(telemetry.getGame(),       data.game)
    assert.deepEqual(telemetry.getControls(),   data.controls)
    assert.deepEqual(telemetry.getJob(),        data.job)
    assert.deepEqual(telemetry.getNavigation(), data.navigation)
    assert.deepEqual(telemetry.getTruck(),      data.truck)
    assert.deepEqual(telemetry.getTrailers(),   data.trailers)
    assert.deepEqual(telemetry.getTrailer(),    data.trailer)

    assert.deepEqual(getBuffer.default.args, [
      [opts],
      [opts],
      [opts],
      [opts],
      [opts],
      [opts],
      [opts],
      [opts],
      [opts],
    ])

    assert.deepEqual(getData.default.args, [
      [null,         opts],
      ["game",       opts],
      ["controls",   opts],
      ["job",        opts],
      ["navigation", opts],
      ["truck",      opts],
      ["trailers",   opts],
      ["trailer",    opts],
    ])
  })

})