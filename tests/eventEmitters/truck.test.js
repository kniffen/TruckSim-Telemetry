const assert    = require('assert')
const sinon     = require('sinon')
const cloneDeep = require('lodash.clonedeep')

const tst = require('../../lib')

const functions = require('../../lib/functions')

describe('eventEmitters/truck()', function() {

  let clock = null

  const telemetry = tst()

  const testData = {
    events: {
      refuel: {
        active: false,
      }
    },
    game: {},
    navigation: {
      speedLimit: 1000,
    },
    trailers: [],
    truck: {
      speed: 1001,
      damage: {
        total: 0.00,
      },
      electric: {
        enabled: false,
      },
      engine: {
        enabled: false,
        oilPressure: {
          warning: {enabled: false},
        },
        waterTemperature: {
          warning: {enabled: false},
        },
        batteryVoltage: {
          warning: {enabled: false},
        }
      },
      transmission: {
        gear: {selected: 0},
      },
      brakes: {
        parking:  {enabled: false},
        retarder: {foo: 'bar'},
        airPressure: {
          warning:   {enabled: false},
          emergency: {enabled: false},
        }
      },
      fuel: {
        volume: 2000,
        warning: {enabled: false},
      },
      adBlue: {
        warning: {enabled: false},
      },
      wipers: {
        enabled: false,
      },
      cruiseControl: {
        enabled: false,
        value:   1002,
        kph:     1003,
        mph:     1004,
      }
    },
  }

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
    testData.truck.brakes.retarder.foo        = 'baz'
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
    testData.truck.brakes.retarder.foo        = 'qux'
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
            currentSpeed: 1001,
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
            currentSpeed: 1001,
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
            currentSpeed: 1001,
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
            currentSpeed: 1001,
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
    assert.deepStrictEqual(
      telemetry.truck.emit.args.filter(event => event[0] === 'damage'),
      [
        ['damage', {total: 0.01}, {total: 0.00}],
      ]
    )
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
        ['gear-change', {selected: 1}, {selected: 0}],
        ['gear-change', {selected: 0}, {selected: 1}],
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
        ['retarder', {foo: 'baz'}, {foo: 'bar'}],
        ['retarder', {foo: 'qux'}, {foo: 'baz'}],
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
            warning: {enabled: false},
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
            warning: {enabled: false},
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
