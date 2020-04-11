import assert from "assert"
import sinon  from "sinon"

import stop from "../lib/stop"

describe("stop()", function() {

  let clock, telemetry, cb

  before(function() {
    clock = sinon.useFakeTimers();
    cb    = sinon.spy()

    telemetry = {
      watcher: setInterval(cb, 1)
    }
  })

  after(function() {
    clock.restore()
  })

  it("Should stop a watcher interval", function() {
    clock.tick(1)
    stop(telemetry)
    clock.tick(100)

    assert.equal(cb.args.length, 1)
  })

})