const assert = require("assert")
const sinon  = require("sinon")

const truckSimTelemetry = require("../src")

describe("truckSimTelemetry()", function() {
    const setIntervalMock   = "foo"
    const clearIntervalMock = "bar"

    class EventEmitterMock {
      constructor() {
        this.foo = "bar"
      }
    }

    const scsSDKTelemetry = {}
    const converters      = [] 
    const eventEmitters   = []

    const getBuffer        = sinon.spy()
    const getData          = sinon.spy(() => data)
    const getPluginVersion = sinon.spy()
    const parseData        = sinon.spy()
    const watch            = sinon.spy()
    const stop             = sinon.spy() 

    const data = {
      controls:   "bar",
      game:       "baz",
      job:        "qux",
      navigation: "quux",
      trailers:   "quuz",
      trailer:    "corge",
      truck:      "grault",
    }

  it("Should return an object when called", function() {
      const opts = {bar: "foo"}
      const cb   = {baz: "bar"}
      
      const telemetry = truckSimTelemetry(
        setIntervalMock,
        clearIntervalMock,
        EventEmitterMock,
        scsSDKTelemetry, 
        converters, 
        eventEmitters,
        getBuffer, 
        getData, 
        getPluginVersion, 
        parseData, 
        watch, 
        stop
      )
      
      telemetry.watch(opts, cb)
      telemetry.stop()
      telemetry.getBuffer()
      telemetry.getData()
      telemetry.getControls()
      telemetry.getGame()
      telemetry.getJob()
      telemetry.getNavigation()
      telemetry.getTrailers()
      telemetry.getTrailer()
      telemetry.getTruck()

      assert.deepEqual(telemetry.game,       {foo: "bar"})
      assert.deepEqual(telemetry.job,        {foo: "bar"})
      assert.deepEqual(telemetry.navigation, {foo: "bar"})
      assert.deepEqual(telemetry.trailers,   {foo: "bar"})
      assert.deepEqual(telemetry.trailer,    {foo: "bar"})
      assert.deepEqual(telemetry.truck,      {foo: "bar"})

      assert.deepEqual(watch.args[0], [setIntervalMock, scsSDKTelemetry, converters, eventEmitters, telemetry, getBuffer, getData, getPluginVersion, parseData, opts, cb])
      assert.deepEqual(stop.args[0],  [clearIntervalMock, telemetry])
      assert.deepEqual(getBuffer.args[0], [scsSDKTelemetry])

      assert.deepEqual(getData.args[0], [null,         scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData])
      assert.deepEqual(getData.args[1], ["controls",   scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData])
      assert.deepEqual(getData.args[2], ["game",       scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData])
      assert.deepEqual(getData.args[3], ["job",        scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData])
      assert.deepEqual(getData.args[4], ["navigation", scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData])
      assert.deepEqual(getData.args[5], ["trailers",   scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData])
      assert.deepEqual(getData.args[6], ["trailer",    scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData])
      assert.deepEqual(getData.args[7], ["truck",      scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData])
  })
})