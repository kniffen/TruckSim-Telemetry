const assert    = require('assert')
const sinon     = require('sinon')
const cloneDeep = require('lodash.clonedeep')

const tst = require('../../lib')

const functions = require('../../lib/functions')

const getFakeData = require('../getFakeData')

describe('eventEmitters/truck()', function() {

  let clock = null

  const telemetry = tst()

  const testData = getFakeData(function(data) {
    data.events.refuel.active = false

    data.navigation.speedLimit = 1000

    data.truck.speed.value = 1001
    data.truck.speed.kph = 1002
    data.truck.speed.mph = 1003


    data.truck.damage.total = 0.00
    data.truck.electric.enabled = false
    data.truck.engine.enabled = false
    data.truck.engine.oilPressure.warning.enabled = false
    data.truck.engine.waterTemperature.warning.enabled = false
    data.truck.engine.batteryVoltage.warning.enabled = false
    data.truck.transmission.gear.selected = 0
    data.truck.transmission.gear.displayed = 0
    data.truck.brakes.parking.enabled = false
    data.truck.brakes.retarder.level = 0
    data.truck.brakes.retarder.steps = 0

    data.truck.brakes.airPressure.warning.enabled = false
    data.truck.brakes.airPressure.emergency.enabled = false
    
    data.truck.fuel.volume = 2000
    data.truck.fuel.avgConsumption = 2001
    data.truck.fuel.capacity = 2002
    data.truck.fuel.range = 2003
    data.truck.fuel.value = 2004
    data.truck.fuel.warning.enabled = false
    data.truck.fuel.warning.factor = 2004

    data.truck.adBlue.warning.enabled = false
    data.truck.wipers.enabled = false
    data.truck.cruiseControl.enabled = false
    data.truck.cruiseControl.value = 1002
    data.truck.cruiseControl.kph = 1003
    data.truck.cruiseControl.mph = 1004
  })

  before(function() {
    clock = sinon.useFakeTimers()
    
    sinon.spy(telemetry.truck, 'emit')

    sinon
      .stub(functions, 'getData')
      .callsFake(() => cloneDeep(testData))

    telemetry.watch()

    clock.tick(100)

    testData.truck.cruiseControl.enabled      = true
    testData.truck.cruiseControl.value        = 1003
    testData.truck.damage.total               = 0.01
    testData.truck.electric.enabled           = true
    testData.truck.engine.enabled             = true
    testData.truck.transmission.gear.selected = 1
    testData.truck.brakes.parking.enabled     = true
    testData.truck.brakes.retarder.level      += 1
    testData.events.refuel.active             = true
    testData.truck.wipers.enabled             = true

    testData.truck.brakes.airPressure.warning.enabled      = true
    testData.truck.fuel.warning.enabled                    = true
    testData.truck.adBlue.warning.enabled                  = true
    testData.truck.engine.oilPressure.warning.enabled      = true
    testData.truck.engine.waterTemperature.warning.enabled = true
    testData.truck.engine.batteryVoltage.warning.enabled   = true

    testData.truck.brakes.airPressure.emergency.enabled = true

    clock.tick(100)

    testData.truck.cruiseControl.enabled      = false
    testData.truck.cruiseControl.value        = 1002
    testData.truck.damage.total               = 0.00
    testData.truck.electric.enabled           = false
    testData.truck.engine.enabled             = false
    testData.truck.transmission.gear.selected = 0
    testData.truck.brakes.parking.enabled     = true
    testData.truck.brakes.retarder.steps      += 1
    testData.events.refuel.active             = false
    testData.truck.wipers.enabled             = false

    testData.truck.brakes.airPressure.warning.enabled      = false
    testData.truck.fuel.warning.enabled                    = false
    testData.truck.adBlue.warning.enabled                  = false
    testData.truck.engine.oilPressure.warning.enabled      = false
    testData.truck.engine.waterTemperature.warning.enabled = false
    testData.truck.engine.batteryVoltage.warning.enabled   = false

    testData.truck.brakes.airPressure.emergency.enabled = false

    clock.tick(100)
  })

  after(function() {
    telemetry.stop()
    clock.restore()
    sinon.restore()
  })

  it('Should emit "cruise-control" events', function() {
    assert.deepStrictEqual(
      telemetry.truck.emit.args.filter(event => event[0] === 'cruise-control'),
      [
        [
          'cruise-control',
          {
            currentSpeed: {
              value: 1001,
              kph:   1002,
              mph:   1003,
            },
            speedLimit:   1000,
            enabled:      true,
            cruiseControlSpeed: {
              value: 1003,
              kph:   1003,
              mph:   1004,
            }
          }
        ],
        [
          'cruise-control',
          {
            currentSpeed: {
              value: 1001,
              kph:   1002,
              mph:   1003,
            },
            speedLimit:   1000,
            enabled:      false,
            cruiseControlSpeed: {
              value: 1002,
              kph:   1003,
              mph:   1004,
            }
          }
        ],
      ]
    )
  })

  it('Should emit "cruise-control-increase" events', function() {
    assert.deepStrictEqual(
      telemetry.truck.emit.args.filter(event => event[0] === 'cruise-control-increase'),
      [
        [
          'cruise-control-increase',
          {
            currentSpeed: {
              value: 1001,
              kph:   1002,
              mph:   1003,
            },
            speedLimit:   1000,
            enabled:      true,
            cruiseControlSpeed: {
              value: 1003,
              kph:   1003,
              mph:   1004,
            }
          }
        ]
      ]
    )
  })

  it('Should emit "cruise-control-decrease" events', function() {
    assert.deepStrictEqual(
      telemetry.truck.emit.args.filter(event => event[0] === 'cruise-control-decrease'),
      [
        [
          'cruise-control-decrease',
          {
            currentSpeed: {
              value: 1001,
              kph:   1002,
              mph:   1003,
            },
            speedLimit:   1000,
            enabled:      false,
            cruiseControlSpeed: {
              value: 1002,
              kph:   1003,
              mph:   1004,
            }
          }
        ]
      ]
    )
  })

  it('Should emit "damage" events', function() {
    const truckDamageEvents = telemetry.truck.emit.args.filter(event => event[0] === 'damage')
    const truckTotalDamage = truckDamageEvents.map(event => ([
      event[1].total,
      event[2].total,
    ]))

    assert.deepStrictEqual(truckTotalDamage, [[0.01, 0.00]])
  })

  it('Should emit "electric" events', function() {
    assert.deepStrictEqual(
      telemetry.truck.emit.args.filter(event => event[0] === 'electric'),
      [
        ['electric', true],
        ['electric', false],
      ]
    )
  })

  it('Should emit "engine" events', function() {
    assert.deepStrictEqual(
      telemetry.truck.emit.args.filter(event => event[0] === 'engine'),
      [
        ['engine', true],
        ['engine', false],
      ]
    )
  })

  it('Should emit "gear-change" events', function() {
    assert.deepStrictEqual(
      telemetry.truck.emit.args.filter(event => event[0] === 'gear-change'),
      [
        ['gear-change', {selected: 1, displayed: 0}, {selected: 0, displayed: 0}],
        ['gear-change', {selected: 0, displayed: 0}, {selected: 1, displayed: 0}],
      ]
    )
  })

  it('Should emit "park" events', function() {
    assert.deepStrictEqual(
      telemetry.truck.emit.args.filter(event => event[0] === 'park'),
      [
        ['park', true],
      ]
    )
  })

  it('Should emit "retarder" events', function() {
    assert.deepStrictEqual(
      telemetry.truck.emit.args.filter(event => event[0] === 'retarder'),
      [
        ['retarder', {level: 1, steps: 0}, {level: 0, steps: 0}],
        ['retarder', {level: 1, steps: 1}, {level: 1, steps: 0}],
      ]
    )
  })

  it('Should emit "refuel-started" events', function() {
    assert.deepStrictEqual(
      telemetry.truck.emit.args.filter(event => event[0] === 'refuel-started'),
      [
        [
          'refuel-started',
          {
            volume: 2000,
            avgConsumption: 2001,
            capacity: 2002,
            range: 2003,
            value: 2004,
            warning: {
              enabled: false,
              factor:  2004,
            },
          }
        ],
      ]
    )
  })

  it('Should emit "refuel-stopped" events', function() {
    assert.deepStrictEqual(
      telemetry.truck.emit.args.filter(event => event[0] === 'refuel-stopped'),
      [
        [
          'refuel-stopped',
          {
            volume: 2000,
            avgConsumption: 2001,
            capacity: 2002,
            range: 2003,
            value: 2004,
            warning: {
              enabled: false,
              factor:  2004,
            },
          }
        ],
      ]
    )
  })

  it('Should emit "wipers" events', function() {
    assert.deepStrictEqual(
      telemetry.truck.emit.args.filter(event => event[0] === 'wipers'),
      [
        ['wipers', true],
        ['wipers', false],
      ]
    )
  })

  it('Should emit "warning" events', function() {
    assert.deepStrictEqual(
      telemetry.truck.emit.args.filter(event => event[0] === 'warning'),
      [
        ['warning', 'Air Pressure',       true],
        ['warning', 'Fuel',               true],
        ['warning', 'AdBlue',             true],
        ['warning', 'Oil Pressure',       true],
        ['warning', 'Water Temperature',  true],
        ['warning', 'Battery Voltage',    true],
        ['warning', 'Air Pressure',      false],
        ['warning', 'Fuel',              false],
        ['warning', 'AdBlue',            false],
        ['warning', 'Oil Pressure',      false],
        ['warning', 'Water Temperature', false],
        ['warning', 'Battery Voltage',   false],
      ]
    )
  })

  it('Should emit "emergency" events', function() {
    assert.deepStrictEqual(
      telemetry.truck.emit.args.filter(event => event[0] === 'emergency'),
      [
        ['emergency', 'Air Pressure', true],
        ['emergency', 'Air Pressure', false],
      ]
    )
  })

})
