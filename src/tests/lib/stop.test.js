import assert from "assert"
import sinon from "sinon"
import stop from "../../lib/stop"

describe("stop()", function() {

  const telemetry = {
    watcher: setInterval(() => {}, 100000)
  }

  const _clearInterval = sinon.spy(clearInterval)

  it("Should stop a watcher interval", function() {
    stop(telemetry, _clearInterval)

    assert.equal(_clearInterval.args[0][0], telemetry.watcher)
  
  })

})