const cloneDeep = require('lodash.clonedeep')

const tst = require('../../lib')

const testBuffers = require('../testBuffers')
const converters = require('../../lib/converters')
const getDataMock = require('../../lib/functions/getData')
const parser = require('../../lib/parser/parseData.js')

jest.mock('../../lib/functions/getData', () => jest.fn())

describe('eventEmitters/truck()', function() {
  const telemetry = tst()
  let testData = null

  beforeAll(function() {
    jest.useFakeTimers()
    jest.spyOn(telemetry.truck, 'emit')

    getDataMock.mockImplementation(() => cloneDeep(testData))
  })

  beforeEach(function() {
    testData = parser(converters[12](testBuffers[12]))
  })

  afterEach(function() {
    telemetry.truck.emit.mockReset()
  })

  afterAll(function() {
    jest.restoreAllMocks()
    jest.useRealTimers()
  })

  it('Should emit "cruise-control" events', function() {
    testData.truck.cruiseControl.enabled = false

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.truck.cruiseControl.enabled = true
    jest.advanceTimersByTime(100)
    testData.truck.cruiseControl.enabled = false
    jest.advanceTimersByTime(100)

    telemetry.stop()

    const expected = {
      cruiseControlSpeed: {
        kph: 0,
        mph: 0,
        value: 0.10000000149011612,
      },
      currentSpeed: {
        kph: 60,
        mph: 38,
        value: 16.766700744628906,
      },
      enabled: true,
      speedLimit: {
        kph: 80,
        mph: 50,
        value: 22.322200775146484,
      }
    }

    expect(telemetry.truck.emit).toHaveBeenCalledTimes(2)
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(1, 'cruise-control', {...expected, enabled: true})
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(2, 'cruise-control', {...expected, enabled: false})
  })

  it('Should emit "cruise-control-increase" events', function() {
    testData.truck.cruiseControl.value = 0

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.truck.cruiseControl.value = 8.33333
    jest.advanceTimersByTime(100)
    testData.truck.cruiseControl.value = 0
    jest.advanceTimersByTime(100)

    telemetry.stop()

    const expected = {
      cruiseControlSpeed: {
        kph: 0,
        mph: 0,
        value: 8.33333,
      },
      currentSpeed: {
        kph: 60,
        mph: 38,
        value: 16.766700744628906,
      },
      enabled: true,
      speedLimit: {
        kph: 80,
        mph: 50,
        value: 22.322200775146484,
      }
    }

    expect(telemetry.truck.emit).toHaveBeenCalledTimes(1)
    expect(telemetry.truck.emit).toHaveBeenCalledWith('cruise-control-increase', expected)
  })

  it('Should emit "cruise-control-decrease" events', function() {
    testData.truck.cruiseControl.value = 16.6667

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.truck.cruiseControl.value = 8.33333
    jest.advanceTimersByTime(100)
    testData.truck.cruiseControl.value = 0
    jest.advanceTimersByTime(100)

    telemetry.stop()

    const expected = {
      cruiseControlSpeed: {
        kph: 0,
        mph: 0,
        value: 8.33333,
      },
      currentSpeed: {
        kph: 60,
        mph: 38,
        value: 16.766700744628906,
      },
      enabled: true,
      speedLimit: {
        kph: 80,
        mph: 50,
        value: 22.322200775146484,
      }
    }

    expect(telemetry.truck.emit).toHaveBeenCalledTimes(1)
    expect(telemetry.truck.emit).toHaveBeenCalledWith('cruise-control-decrease', expected)
  })

  it('Should emit "damage" events', function() {
    testData.truck.damage.total = 0.00

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.truck.damage.total = 0.01
    jest.advanceTimersByTime(100)
    testData.truck.damage.total = 0.00
    jest.advanceTimersByTime(100)

    telemetry.stop()

    const expected = {
      total:        0.01,
      engine:       0.20000000298023224,
      transmission: 0.30000001192092896,
      cabin:        0.4000000059604645,
      chassis:      0.5,
      wheels:       0.6000000238418579,
    }

    expect(telemetry.truck.emit).toHaveBeenCalledTimes(1)
    expect(telemetry.truck.emit).toHaveBeenCalledWith('damage', expected, {...expected, total: 0})
  })

  it('Should emit "electric" events', function() {
    testData.truck.electric.enabled = false

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.truck.electric.enabled = true
    jest.advanceTimersByTime(100)
    testData.truck.electric.enabled = false
    jest.advanceTimersByTime(100)

    telemetry.stop()

    expect(telemetry.truck.emit).toHaveBeenCalledTimes(2)
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(1, 'electric', true)
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(2, 'electric', false)
  })

  it('Should emit "engine" events', function() {
    testData.truck.engine.enabled = false

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.truck.engine.enabled = true
    jest.advanceTimersByTime(100)
    testData.truck.engine.enabled = false
    jest.advanceTimersByTime(100)

    telemetry.stop()

    expect(telemetry.truck.emit).toHaveBeenCalledTimes(2)
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(1, 'engine', true)
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(2, 'engine', false)
  })

  it('Should emit "gear-change" events', function() {
    testData.truck.transmission.gear.selected = 0

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.truck.transmission.gear.selected = 1
    jest.advanceTimersByTime(100)
    testData.truck.transmission.gear.selected = 0
    jest.advanceTimersByTime(100)

    telemetry.stop()

    expect(telemetry.truck.emit).toHaveBeenCalledTimes(2)
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(
      1, 'gear-change', {selected: 1, displayed: 2}, {selected: 0, displayed: 2}
    )
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(
      2, 'gear-change', {selected: 0, displayed: 2}, {selected: 1, displayed: 2}
    )
  })

  it('Should emit "park" events', function() {
    testData.truck.brakes.parking.enabled = false

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.truck.brakes.parking.enabled = true
    jest.advanceTimersByTime(100)
    testData.truck.brakes.parking.enabled = false
    jest.advanceTimersByTime(100)

    telemetry.stop()

    expect(telemetry.truck.emit).toHaveBeenCalledTimes(2)
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(1, 'park', true)
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(2, 'park', false)
  })

  it('Should emit "retarder" events', function() {
    testData.truck.brakes.retarder.steps = 0

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.truck.brakes.retarder.steps += 1
    jest.advanceTimersByTime(100)
    testData.truck.brakes.retarder.steps -= 1
    jest.advanceTimersByTime(100)

    telemetry.stop()

    expect(telemetry.truck.emit).toHaveBeenCalledTimes(2)
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(
      1, 'retarder', {level: 0, steps: 1}, {level: 0, steps: 0}
    )
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(
      2, 'retarder', {level: 0, steps: 0}, {level: 0, steps: 1}
    )
  })

  it('Should emit "refuel-started" events', function() {
    testData.events.refuel.active = false

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.events.refuel.active = true
    jest.advanceTimersByTime(100)
    testData.events.refuel.active = false
    jest.advanceTimersByTime(100)

    telemetry.stop()

    const expected = {
      avgConsumption: 10.600000381469727,
      capacity: 500.1000061035156,
      range: 650.5999755859375,
      value: 300.6000061035156,
      warning: {
        enabled: true,
        factor:  0.25,
      },
    }

    expect(telemetry.truck.emit).toHaveBeenCalledTimes(2)
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(1, 'refuel-started', expected)
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(2, 'refuel-stopped', expect.anything())
  })

  it('Should emit "refuel-stopped" events', function() {
    testData.events.refuel.active = true

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.events.refuel.active = false
    jest.advanceTimersByTime(100)
    testData.events.refuel.active = true
    jest.advanceTimersByTime(100)

    telemetry.stop()

    const expected = {
      avgConsumption: 10.600000381469727,
      capacity: 500.1000061035156,
      range: 650.5999755859375,
      value: 300.6000061035156,
      warning: {
        enabled: true,
        factor:  0.25,
      },
    }

    expect(telemetry.truck.emit).toHaveBeenCalledTimes(2)
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(1, 'refuel-stopped', expected)
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(2, 'refuel-started', expect.anything())
  })

  it('Should emit "wipers" events', function() {
    testData.truck.wipers.enabled = false

    telemetry.watch()

    jest.advanceTimersByTime(100)
    testData.truck.wipers.enabled = true
    jest.advanceTimersByTime(100)
    testData.truck.wipers.enabled = false
    jest.advanceTimersByTime(100)

    telemetry.stop()

    expect(telemetry.truck.emit).toHaveBeenCalledTimes(2)
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(1, 'wipers', true)
    expect(telemetry.truck.emit).toHaveBeenNthCalledWith(2, 'wipers', false)
  })

  it('Should emit "warning" events', function() {
    const setWarnings = (value) => {
      testData.truck.engine.oilPressure.warning.enabled      = value
      testData.truck.engine.waterTemperature.warning.enabled = value
      testData.truck.engine.batteryVoltage.warning.enabled   = value
      testData.truck.brakes.airPressure.warning.enabled      = value
      testData.truck.fuel.warning.enabled                    = value
      testData.truck.adBlue.warning.enabled                  = value
    }

    setWarnings(false)

    telemetry.watch()

    jest.advanceTimersByTime(100)
    setWarnings(true)
    jest.advanceTimersByTime(100)
    setWarnings(false)
    jest.advanceTimersByTime(100)

    telemetry.stop()

    expect(telemetry.truck.emit).toHaveBeenCalledTimes(12)

    expect(telemetry.truck.emit).toHaveBeenCalledWith('warning', 'Air Pressure',      true)
    expect(telemetry.truck.emit).toHaveBeenCalledWith('warning', 'Fuel',              true)
    expect(telemetry.truck.emit).toHaveBeenCalledWith('warning', 'AdBlue',            true)
    expect(telemetry.truck.emit).toHaveBeenCalledWith('warning', 'Oil Pressure',      true)
    expect(telemetry.truck.emit).toHaveBeenCalledWith('warning', 'Water Temperature', true)
    expect(telemetry.truck.emit).toHaveBeenCalledWith('warning', 'Battery Voltage',   true)

    expect(telemetry.truck.emit).toHaveBeenCalledWith('warning', 'Air Pressure',      false)
    expect(telemetry.truck.emit).toHaveBeenCalledWith('warning', 'Fuel',              false)
    expect(telemetry.truck.emit).toHaveBeenCalledWith('warning', 'AdBlue',            false)
    expect(telemetry.truck.emit).toHaveBeenCalledWith('warning', 'Oil Pressure',      false)
    expect(telemetry.truck.emit).toHaveBeenCalledWith('warning', 'Water Temperature', false)
    expect(telemetry.truck.emit).toHaveBeenCalledWith('warning', 'Battery Voltage',   false)
  })

  it('Should emit "emergency" events', function() {
    const setEmergency = (value) => {
      testData.truck.brakes.airPressure.emergency.enabled = value
    }

    setEmergency(false)

    telemetry.watch()

    jest.advanceTimersByTime(100)
    setEmergency(true)
    jest.advanceTimersByTime(100)
    setEmergency(false)
    jest.advanceTimersByTime(100)

    telemetry.stop()

    expect(telemetry.truck.emit).toHaveBeenCalledTimes(2)

    expect(telemetry.truck.emit).toHaveBeenCalledWith('emergency', 'Air Pressure', true)

    expect(telemetry.truck.emit).toHaveBeenCalledWith('emergency', 'Air Pressure', false)
  })
})
