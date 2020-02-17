const assert = require("assert")
const sinon  = require("sinon")

const stop = require("../src/stop")

describe("stop()", function() {

  const telemetry = {
    watcher: setInterval(() => {}, 100000)
  }

  const clearIntervalMock = sinon.spy(clearInterval)

  it("Should stop a watcher interval", function() {
    stop(clearIntervalMock, telemetry)

    assert.equal(clearIntervalMock.args[0][0], telemetry.watcher)
  
  })

})