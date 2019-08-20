import assert from "assert"
import sinon from "sinon"
import truckSimTelemetry from "../../lib"

describe("truckSimTelemetry()", function() {
    class _EventEmitter {
        constructor() {
          this.foo = "bar"
        }
    }

    const data = {
      controls:   "bar",
      game:       "baz",
      job:        "qux",
      navigation: "quux",
      trailers:   "quuz",
      trailer:    "corge",
      truck:      "grault",
    }

    const getBuffer = () => "foo"
    const getData   = () => data
    const watch     = sinon.spy()
    const stop      = sinon.spy() 

  it("Should return an object when called", function() {
      const opts = {bar: "foo"}
      const cb   = {baz: "bar"}
      const telemetry = truckSimTelemetry(null, _EventEmitter, getBuffer, getData, watch, stop)
      
      telemetry.watch(opts, cb)
      telemetry.stop()

      assert.deepEqual(telemetry.game,       {foo: "bar"})
      assert.deepEqual(telemetry.job,        {foo: "bar"})
      assert.deepEqual(telemetry.navigation, {foo: "bar"})
      assert.deepEqual(telemetry.trailers,   {foo: "bar"})
      assert.deepEqual(telemetry.trailer,    {foo: "bar"})
      assert.deepEqual(telemetry.truck,      {foo: "bar"})

      assert.deepEqual(watch.args[0][0], telemetry)
      assert.deepEqual(watch.args[0][1], opts)
      assert.deepEqual(watch.args[0][2], cb)

      assert.deepEqual(stop.args[0][0], telemetry)

      assert.equal(telemetry.getBuffer(), "foo")
      assert.deepEqual(telemetry.getData(), data)
  })

  it("Should contain various functions", function() {
    assert.equal(typeof truckSimTelemetry.getBuffer,     "function")
    assert.equal(typeof truckSimTelemetry.getData,       "function")
    assert.equal(typeof truckSimTelemetry.getControls,   "function")
    assert.equal(typeof truckSimTelemetry.getGame,       "function")
    assert.equal(typeof truckSimTelemetry.getJob,        "function")
    assert.equal(typeof truckSimTelemetry.getNavigation, "function")
    assert.equal(typeof truckSimTelemetry.getTrailers,   "function")
    assert.equal(typeof truckSimTelemetry.getTrailer,    "function")
    assert.equal(typeof truckSimTelemetry.getTruck,      "function")
  })

})