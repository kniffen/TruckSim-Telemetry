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

  before(function() {
    buffer = fs.readFileSync(path.resolve(__dirname, "./buffers/scs_sdk_plugin_buffer_10"))
    data   = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./data/scs_sdk_plugin_parsed_data_10.json")))

    sinon.stub(getBuffer, "default").callsFake(function() {
      return buffer
    })
  })

  after(function() {
    getBuffer.default.restore()
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

    assert.deepEqual(telemetry.getBuffer(),     buffer)
    assert.deepEqual(telemetry.getData(),       data)
    assert.deepEqual(telemetry.getGame(),       data.game)
    assert.deepEqual(telemetry.getControls(),   data.controls)
    assert.deepEqual(telemetry.getJob(),        data.job)
    assert.deepEqual(telemetry.getNavigation(), data.navigation)
    assert.deepEqual(telemetry.getTruck(),      data.truck)
    assert.deepEqual(telemetry.getTrailers(),   data.trailers)
    assert.deepEqual(telemetry.getTrailer(),    data.trailer)
  })

})