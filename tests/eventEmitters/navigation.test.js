const assert       = require("assert")
const sinon        = require("sinon")
const EventEmitter = require("events")

const navigation = require("../../src/eventEmitters/navigation")

describe("eventEmitters/navigation()", function() {

  const telemetry = {
    navigation: new EventEmitter()
  }

  const spies = {
    speedLimit: sinon.spy()
  }

  const data = []

  const createData = () => ({
    navigation: {
      speedLimit: {value: 0}
    }
  })

  before(function() {
    data[0] = createData()
    data[1] = createData()
  
    telemetry.navigation.on("speed-limit", spies.speedLimit)

    navigation(telemetry, data)
    data[0].navigation.speedLimit.value = 50
    navigation(telemetry, data)
    data[0].navigation.speedLimit.value = 0
    navigation(telemetry, data)
    data[1].navigation.speedLimit.value = 0
    navigation(telemetry, data)
    data[1].navigation.speedLimit.value = 50
    navigation(telemetry, data)
    data[0].navigation.speedLimit.value = 60
    navigation(telemetry, data)
  })

  it("Should emit speed-limit events", function() {
    assert.equal(spies.speedLimit.args.length, 3)
    assert.deepEqual(spies.speedLimit.args[0], [{value: 50}, {value: 0}])
    assert.deepEqual(spies.speedLimit.args[1], [{value: 0},  {value: 50}])
    assert.deepEqual(spies.speedLimit.args[2], [{value: 60}, {value: 50}])
  })

})