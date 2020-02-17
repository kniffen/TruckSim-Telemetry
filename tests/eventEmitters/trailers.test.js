const assert       = require("assert")
const sinon        = require("sinon")
const EventEmitter = require("events")

const trailers = require("../../src/eventEmitters/trailers")

describe("eventEmitters/trailers()", function() {

  const telemetry = {
    trailers: new EventEmitter(),
    trailer:  new EventEmitter(),
  }

  const spies = {
    trailers: {
      coupling: sinon.spy(),
      damage:   sinon.spy(),
    },
    trailer: {
      coupling: sinon.spy(),
      damage:   sinon.spy(),
    },
  }

  const data = []

  const createData = () => ({
    trailers: [
      {attached: true,  damage: {chassis: 0.01}},
      {attached: false, damage: {chassis: 0.02}},
      {attached: true,  damage: {chassis: 0.03}},
    ]
  })

  before(function() {
    data[0] = createData()
    data[1] = createData()
  
    telemetry.trailers.on("coupling", spies.trailers.coupling)
    telemetry.trailers.on("damage",   spies.trailers.damage)
    
    telemetry.trailer.on("coupling", spies.trailer.coupling)
    telemetry.trailer.on("damage",   spies.trailer.damage)

    trailers(telemetry, data)
    data[0].trailers[0].attached = false
    data[0].trailers[1].attached = true
    data[0].trailers[0].damage.chassis = 0.03
    data[0].trailers[2].damage.chassis = 0.02
    trailers(telemetry, data)
    data[0].trailers[0].attached = true
    data[0].trailers[1].attached = false
    data[1].trailers[0].damage.chassis = 0.03
    trailers(telemetry, data)
    data[1].trailers[0].attached = true
    data[1].trailers[1].attached = false
    data[1].trailers[0].damage.chassis = 0.02
    data[1].trailers[2].damage.chassis = 0.01
    trailers(telemetry, data)
    data[0].trailers[0].attached = true
    data[0].trailers[1].attached = false
    data[0].trailers[0].damage.chassis = 0.00
    data[0].trailers[2].damage.chassis = 0.05
    trailers(telemetry, data)
  })

  it("Should emit coupling events", function() {
    assert.equal(spies.trailers.coupling.args.length, 2)
    assert.equal(spies.trailer.coupling.args.length, 1)

    assert.deepEqual(spies.trailers.coupling.args[0], [0, false])
    assert.deepEqual(spies.trailers.coupling.args[1], [1, true])

    assert.deepEqual(spies.trailer.coupling.args[0][0], false)
  })

  it("Should emit damage events", function() {
    assert.equal(spies.trailers.damage.args.length, 4)
    assert.equal(spies.trailer.damage.args.length, 2)

    assert.deepEqual(spies.trailers.damage.args[0], [0, {chassis: 0.03}, {chassis: 0.01}])
    assert.deepEqual(spies.trailers.damage.args[1], [0, {chassis: 0.03}, {chassis: 0.02}])
    assert.deepEqual(spies.trailers.damage.args[2], [2, {chassis: 0.02}, {chassis: 0.01}])
    assert.deepEqual(spies.trailers.damage.args[3], [2, {chassis: 0.05}, {chassis: 0.01}])
  
    assert.deepEqual(spies.trailer.damage.args[0], [{chassis: 0.03}, {chassis: 0.01}])
    assert.deepEqual(spies.trailer.damage.args[1], [{chassis: 0.03}, {chassis: 0.02}])
  })

})