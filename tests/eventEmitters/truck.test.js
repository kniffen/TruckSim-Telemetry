const assert       = require("assert")
const sinon        = require("sinon")
const EventEmitter = require("events")

const truck = require("../../src/eventEmitters/truck")

describe("eventEmitters/truck()", function() {

  const telemetry = {
    truck: new EventEmitter()
  }

  const spies = {
    damage:                sinon.spy(),
    cruiseControl:         sinon.spy(),
    cruiseControlIncrease: sinon.spy(),
    cruiseControlDecrease: sinon.spy(),
    warning:               sinon.spy(),
    emergency:             sinon.spy(),
    engine:                sinon.spy(),
    electric:              sinon.spy(),
    gearChange:            sinon.spy(),
    park:                  sinon.spy(),
    retarder:              sinon.spy(),
    wipers:                sinon.spy(),
    refuel:                sinon.spy(),
  }

  const data = []

  const createData = () => ({
    truck: {
      damage:{
        chassis: 0.01
      },
      cruiseControl: {
        enabled: false,
        value:   0
      },
      brakes: {
        airPressure: {
          warning:   {enabled: false},
          emergency: {enabled: false}
        },
        parking: {
          enabled: false
        },
        retarder: {
          steps: 5,
          level: 2
        }
      },
      fuel: {
        warning: {enabled: false}
      },
      adBlue: {
        warning: {enabled: false}
      },
      engine: {
        enabled: false,
        oilPressure: {
          warning: {enabled: false}
        },
        waterTemperature: {
          warning: {enabled: false}
        },
        batteryVoltage: {
          warning: {enabled: false}
        }
      },
      electric: {
        enabled: false
      },
      transmission: {
        gear: {
          selected: 2
        }
      },
      wipers: {
        enabled: false
      }
    },
    events: {
      refuel: {
        active: false,
        amount: 0
      }
    }
  })

  before(function() {
    telemetry.truck.on("damage",                   spies.damage)
    telemetry.truck.on("cruise-control",           spies.cruiseControl)
    telemetry.truck.on("cruise-control-increase",  spies.cruiseControlIncrease)
    telemetry.truck.on("cruise-control-decrease",  spies.cruiseControlDecrease)
    telemetry.truck.on("warning",                  spies.warning)
    telemetry.truck.on("emergency",                spies.emergency)
    telemetry.truck.on("engine",                   spies.engine)
    telemetry.truck.on("electric",                 spies.electric)
    telemetry.truck.on("gear-change",              spies.gearChange)
    telemetry.truck.on("park",                     spies.park)
    telemetry.truck.on("retarder",                 spies.retarder)
    telemetry.truck.on("wipers",                   spies.wipers)
    telemetry.truck.on("refuel",                   spies.refuel)
  })

  beforeEach(function() {
    data[0] = createData()
    data[1] = createData()

    sinon.reset()
  })

  it("Should emit damage events", function() {
    truck(telemetry, data)
    data[0].truck.damage.chassis = 0.03
    truck(telemetry, data)
    data[1].truck.damage.chassis = 0.03
    truck(telemetry, data)
    data[0].truck.damage.chassis = 0.02
    truck(telemetry, data)
    data[0].truck.damage.chassis = 0.05
    truck(telemetry, data)

    assert.equal(spies.damage.args.length, 2)
    assert.deepEqual(spies.damage.args[0], [{chassis: 0.03}, {chassis: 0.01}])
    assert.deepEqual(spies.damage.args[1], [{chassis: 0.05}, {chassis: 0.03}])
  })

  it("Should emit cruise-control events", function() {
    truck(telemetry, data)
    data[0].truck.cruiseControl.enabled = true
    truck(telemetry, data)
    data[1].truck.cruiseControl.enabled = true
    truck(telemetry, data)
    data[0].truck.cruiseControl.enabled = false
    truck(telemetry, data)
    data[0].truck.cruiseControl.enabled = true
    truck(telemetry, data)

    assert.equal(spies.cruiseControl.args.length, 2)
    assert.equal(spies.cruiseControl.args[0][0], true)
    assert.equal(spies.cruiseControl.args[1][0], false)
  })

  it("Should emit cruise-control-increase events", function() {
    truck(telemetry, data)
    data[0].truck.cruiseControl.value++
    truck(telemetry, data)
    data[1].truck.cruiseControl.value++
    truck(telemetry, data)
    data[0].truck.cruiseControl.value--
    truck(telemetry, data)
    data[0].truck.cruiseControl.value+=2
    truck(telemetry, data)

    assert.equal(spies.cruiseControlIncrease.args.length, 2)
    assert.deepEqual(spies.cruiseControlIncrease.args[0][0], {enabled: false, value: 1})
    assert.deepEqual(spies.cruiseControlIncrease.args[1][0], {enabled: false, value: 2})
  })

  it("Should emit cruise-control-decrease events", function() {
    data[0].truck.cruiseControl.value = 10
    data[1].truck.cruiseControl.value = 10
    truck(telemetry, data)
    data[0].truck.cruiseControl.value--
    truck(telemetry, data)
    data[1].truck.cruiseControl.value--
    truck(telemetry, data)
    data[0].truck.cruiseControl.value++
    truck(telemetry, data)
    data[0].truck.cruiseControl.value-=5
    truck(telemetry, data)

    assert.equal(spies.cruiseControlDecrease.args.length, 2)
    assert.deepEqual(spies.cruiseControlDecrease.args[0][0], {enabled: false, value: 9})
    assert.deepEqual(spies.cruiseControlDecrease.args[1][0], {enabled: false, value: 5})
  })

  it("Should emit warning events", function() {
    truck(telemetry, data)
    data[0].truck.brakes.airPressure.warning.enabled      = true
    data[0].truck.fuel.warning.enabled                    = true
    data[0].truck.adBlue.warning.enabled                  = true
    data[0].truck.engine.oilPressure.warning.enabled      = true
    data[0].truck.engine.waterTemperature.warning.enabled = true
    data[0].truck.engine.batteryVoltage.warning.enabled   = true
    truck(telemetry, data)
    data[1].truck.brakes.airPressure.warning.enabled      = true
    data[1].truck.fuel.warning.enabled                    = true
    data[1].truck.adBlue.warning.enabled                  = true
    data[1].truck.engine.oilPressure.warning.enabled      = true
    data[1].truck.engine.waterTemperature.warning.enabled = true
    data[1].truck.engine.batteryVoltage.warning.enabled   = true
    data[0].truck.brakes.airPressure.warning.enabled      = false
    data[0].truck.fuel.warning.enabled                    = false
    data[0].truck.adBlue.warning.enabled                  = false
    data[0].truck.engine.oilPressure.warning.enabled      = false
    data[0].truck.engine.waterTemperature.warning.enabled = false
    data[0].truck.engine.batteryVoltage.warning.enabled   = false
    truck(telemetry, data)
    data[0].truck.brakes.airPressure.warning.enabled      = true
    data[0].truck.fuel.warning.enabled                    = true
    data[0].truck.adBlue.warning.enabled                  = true
    data[0].truck.engine.oilPressure.warning.enabled      = true
    data[0].truck.engine.waterTemperature.warning.enabled = true
    data[0].truck.engine.batteryVoltage.warning.enabled   = true
    truck(telemetry, data)

    assert.deepEqual(spies.warning.args, [
      ["Air Pressure",      true],
      ["Fuel",              true],
      ["AdBlue",            true],
      ["Oil Pressure",      true],
      ["Water Temperature", true],
      ["Battery Voltage",   true],
      ["Air Pressure",      false],
      ["Fuel",              false],
      ["AdBlue",            false],
      ["Oil Pressure",      false],
      ["Water Temperature", false],
      ["Battery Voltage",   false],
    ])
  })

  it("Should emit emergency events", function() {
    truck(telemetry, data)
    data[0].truck.brakes.airPressure.emergency.enabled = true
    truck(telemetry, data)
    data[1].truck.brakes.airPressure.emergency.enabled = true
    data[0].truck.brakes.airPressure.emergency.enabled = false
    truck(telemetry, data)
    data[0].truck.brakes.airPressure.emergency.enabled = true
    truck(telemetry, data)

    assert.deepEqual(spies.emergency.args, [
      ["Air Pressure",      true],
      ["Air Pressure",      false],
    ])

  })

  it("Should emit engine events", function() {
    truck(telemetry, data)
    data[0].truck.engine.enabled = true
    truck(telemetry, data)
    data[1].truck.engine.enabled = true
    data[0].truck.engine.enabled = false
    truck(telemetry, data)
    data[0].truck.engine.enabled = true
    truck(telemetry, data)

    assert.deepEqual(spies.engine.args, [[true], [false]])

  })

  it("Should emit electric events", function() {
    truck(telemetry, data)
    data[0].truck.electric.enabled = true
    truck(telemetry, data)
    data[1].truck.electric.enabled = true
    data[0].truck.electric.enabled = false
    truck(telemetry, data)
    data[0].truck.electric.enabled = true
    truck(telemetry, data)

    assert.deepEqual(spies.electric.args, [[true], [false]])

  })

  it("Should emit gear-change events", function() {
    truck(telemetry, data)
    data[0].truck.transmission.gear.selected++
    truck(telemetry, data)
    data[1].truck.transmission.gear.selected++
    data[0].truck.transmission.gear.selected--
    truck(telemetry, data)
    data[0].truck.transmission.gear.selected++
    truck(telemetry, data)

    assert.deepEqual(spies.gearChange.args, [
      [{selected: 3}, {selected: 2}],
      [{selected: 2}, {selected: 3}],
    ])
  })

  it("Should emit park events", function() {
    truck(telemetry, data)
    data[0].truck.brakes.parking.enabled = true
    truck(telemetry, data)
    data[1].truck.brakes.parking.enabled = true
    data[0].truck.brakes.parking.enabled = false
    truck(telemetry, data)
    data[0].truck.brakes.parking.enabled = true
    truck(telemetry, data)

    assert.deepEqual(spies.park.args, [[true], [false]])

  })

  it("Should emit retarder events", function() {
    truck(telemetry, data)
    data[0].truck.brakes.retarder.level++
    truck(telemetry, data)
    data[1].truck.brakes.retarder.level++
    data[0].truck.brakes.retarder.level--
    truck(telemetry, data)
    data[0].truck.brakes.retarder.level++
    truck(telemetry, data)

    assert.deepEqual(spies.retarder.args, [
      [{steps: 5, level: 3}, {steps: 5, level: 2}],
      [{steps: 5, level: 2}, {steps: 5, level: 3}],
    ])
  })

  it("Should emit wipers events", function() {
    truck(telemetry, data)
    data[0].truck.wipers.enabled = true
    truck(telemetry, data)
    data[1].truck.wipers.enabled = true
    data[0].truck.wipers.enabled = false
    truck(telemetry, data)
    data[0].truck.wipers.enabled = true
    truck(telemetry, data)

    assert.deepEqual(spies.wipers.args, [[true], [false]])
  })

  it("Should emit refuel events", function() {
    truck(telemetry, data)
    data[0].events.refuel.active = true
    data[0].events.refuel.amount = 1
    truck(telemetry, data)

    assert.deepEqual(spies.refuel.args, [
      [{active: true, amount: 1}, {active: false, amount: 0}],
    ])
  })

})