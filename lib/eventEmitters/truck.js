const isEqual = require('lodash.isequal')

function eventEmittersTruck(telemetry, currentState, previousState) {

  // Cruise control toggle
  if (currentState.truck?.cruiseControl?.enabled != previousState.truck?.cruiseControl?.enabled) {
    const cruiseControlData = {
      enabled:      currentState.truck.cruiseControl.enabled,
      currentSpeed: currentState.truck.speed,
      speedLimit:   currentState.navigation.speedLimit,
      cruiseControlSpeed: {
        value: currentState.truck.cruiseControl.value,
        kph:   currentState.truck.cruiseControl.kph,
        mph:   currentState.truck.cruiseControl.mph
      },
    }

    telemetry.truck.emit('cruise-control', cruiseControlData)
  }

  // Cruise control increase
  if (currentState.truck?.cruiseControl?.value > previousState.truck?.cruiseControl?.value) {
    const cruiseControlData = {
      enabled:      currentState.truck.cruiseControl.enabled,
      currentSpeed: currentState.truck.speed,
      speedLimit:   currentState.navigation.speedLimit,
      cruiseControlSpeed: {
        value: currentState.truck.cruiseControl.value,
        kph:   currentState.truck.cruiseControl.kph,
        mph:   currentState.truck.cruiseControl.mph
      },
    }

    telemetry.truck.emit('cruise-control-increase', cruiseControlData)
  }

  // Cruise control decrease
  if (currentState.truck?.cruiseControl?.value < previousState.truck?.cruiseControl?.value) {
    const cruiseControlData = {
      enabled:      currentState.truck.cruiseControl.enabled,
      currentSpeed: currentState.truck.speed,
      speedLimit:   currentState.navigation.speedLimit,
      cruiseControlSpeed: {
        value: currentState.truck.cruiseControl.value,
        kph:   currentState.truck.cruiseControl.kph,
        mph:   currentState.truck.cruiseControl.mph
      },
    }

    telemetry.truck.emit('cruise-control-decrease', cruiseControlData)
  }

  // Truck damage
  const currentTruckDamage  = Math.floor(currentState.truck?.damage?.total  * 100)
  const previousTruckDamage = Math.floor(previousState.truck?.damage?.total * 100)
  if (currentTruckDamage > previousTruckDamage) {
    telemetry.truck.emit('damage', currentState.truck.damage, previousState.truck.damage)
  }

  // Electric
  if (currentState.truck?.electric?.enabled != previousState.truck?.electric?.enabled) {
    telemetry.truck.emit('electric', currentState.truck.electric.enabled)
  }

  // Engine
  if (currentState.truck?.engine?.enabled != previousState.truck?.engine?.enabled) {
    telemetry.truck.emit('engine', currentState.truck.engine.enabled)
  }

  // Gear change
  if (currentState.truck?.transmission?.gear.selected != previousState.truck?.transmission?.gear.selected) {
    telemetry.truck.emit('gear-change', currentState.truck.transmission.gear, previousState.truck.transmission.gear)
  }

  // Park
  if (currentState.truck?.brakes?.parking.enabled != previousState.truck?.brakes?.parking.enabled) {
    telemetry.truck.emit('park', currentState.truck.brakes.parking.enabled)
  }

  // Retarder
  if (!isEqual(currentState.truck?.brakes?.retarder, previousState.truck?.brakes?.retarder)){
    telemetry.truck.emit('retarder', currentState.truck.brakes.retarder, previousState.truck.brakes.retarder)
  }

  // Refuel started
  if (currentState.events?.refuel?.active && !previousState.events?.refuel?.active) {
    telemetry.truck.emit('refuel-started', previousState.truck.fuel)
  }

  // Refuel stopped
  if (!currentState.events?.refuel?.active && previousState.events?.refuel?.active) {
    telemetry.truck.emit('refuel-stopped', currentState.truck.fuel)
  }

  // Wipers
  if (currentState.truck?.wipers?.enabled != previousState.truck?.wipers?.enabled) {
    telemetry.truck.emit('wipers', currentState.truck.wipers.enabled)
  }

  // Warnings
  const warnings = [
    ['Air Pressure',      currentState.truck?.brakes?.airPressure.warning.enabled,      previousState.truck?.brakes?.airPressure.warning.enabled],
    ['Fuel',              currentState.truck?.fuel?.warning.enabled,                    previousState.truck?.fuel?.warning.enabled],
    ['AdBlue',            currentState.truck?.adBlue?.warning.enabled,                  previousState.truck?.adBlue?.warning.enabled],
    ['Oil Pressure',      currentState.truck?.engine?.oilPressure.warning.enabled,      previousState.truck?.engine?.oilPressure.warning.enabled],
    ['Water Temperature', currentState.truck?.engine?.waterTemperature.warning.enabled, previousState.truck?.engine?.waterTemperature.warning.enabled],
    ['Battery Voltage',   currentState.truck?.engine?.batteryVoltage.warning.enabled,   previousState.truck?.engine?.batteryVoltage.warning.enabled],
  ]

  for (let i = 0; i < warnings.length; i++) {
    if (warnings[i][1] != warnings[i][2]) {
      telemetry.truck.emit('warning', warnings[i][0], warnings[i][1])
    }
  }

  // Emergencies
  const emergencies = [
    ['Air Pressure', currentState.truck?.brakes?.airPressure.emergency.enabled, previousState.truck?.brakes?.airPressure.emergency.enabled]
  ]

  for (let i = 0; i < emergencies.length; i++) {
    if (emergencies[i][1] != emergencies[i][2]) {
      telemetry.truck.emit('emergency', emergencies[i][0], emergencies[i][1])
    }
  }
}

module.exports = eventEmittersTruck