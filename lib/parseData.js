function parseData(data) {
  const output = {}

  fixPropNames(data, output)

  // Game
  output.game.sdkActive        = output.game.sdkActive == 1 ? true : false
  output.game.version          = `${output.game.version.major}.${output.game.version.minor}`
  output.game.telemetryVersion = `${output.game.telemetryVersion.major}.${output.game.telemetryVersion.minor}`
  output.game.paused           = output.game.paused == 1 ? true : false
  output.game.game             = {id:   output.game.game, name: ["unknown", "ets2", "ats"][output.game.game]}
  output.game.time             = convertTime(output.game.time)

  // Truck
  output.truck.speed                 = convertSpeed(output.truck.speed)
  output.truck.cruiseControl         = convertSpeed(output.truck.cruiseControl)
  output.truck.cruiseControl.enabled = output.truck.cruiseControl.enabled == 1 ? true : false
  output.truck.electric.enabled      = output.truck.electric.enabled      == 1 ? true : false
  output.truck.wipers.enabled        = output.truck.wipers.enabled        == 1 ? true : false

  // Engine
  output.truck.engine.enabled                          = output.truck.engine.enabled                          == 1 ? true : false
  output.truck.engine.oilPressure.warning.enabled      = output.truck.engine.oilPressure.warning.enabled      == 1 ? true : false
  output.truck.engine.waterTemperature.warning.enabled = output.truck.engine.waterTemperature.warning.enabled == 1 ? true : false
  output.truck.engine.batteryVoltage.warning.enabled   = output.truck.engine.batteryVoltage.warning.enabled   == 1 ? true : false
  
  // Transmission
  for (let i = 0; i < output.truck.transmission.selector.length; i++)
    output.truck.transmission.selector[i] = output.truck.transmission.selector[i] == 1 ? true : false

  const tempSlots = []
  for (let i = 0; i < 32; i++) {
    tempSlots.push({
      handlePosition: output.truck.transmission.slots.handlePosition[i],
      selector:       output.truck.transmission.slots.selector[i],
      gear:           output.truck.transmission.slots.gear[i]
    })
  }

  output.truck.transmission.slots = tempSlots

  // Brakes
  output.truck.brakes.parking.enabled               = output.truck.brakes.parking.enabled == 1 ? true : false
  output.truck.brakes.motor.enabled                 = output.truck.brakes.motor.enabled   == 1 ? true : false
  output.truck.brakes.airPressure.warning.enabled   = output.truck.brakes.airPressure.warning.enabled      == 1 ? true : false
  output.truck.brakes.airPressure.emergency.enabled = output.truck.brakes.airPressure.emergency.enabled    == 1 ? true : false
  
  // Fuel
  output.truck.fuel.warning.enabled = output.truck.fuel.warning.enabled == 1 ? true : false

  // AdBlue
  output.truck.adBlue.warning.enabled = output.truck.adBlue.warning.enabled == 1 ? true : false

  // Lights
  output.truck.lights.blinker.left.enabled  = output.truck.lights.blinker.left.enabled  == 1 ? true : false
  output.truck.lights.blinker.right.enabled = output.truck.lights.blinker.right.enabled == 1 ? true : false
  output.truck.lights.blinker.left.active   = output.truck.lights.blinker.left.active   == 1 ? true : false
  output.truck.lights.blinker.right.active  = output.truck.lights.blinker.right.active  == 1 ? true : false
  output.truck.lights.parking.enabled       = output.truck.lights.parking.enabled       == 1 ? true : false
  output.truck.lights.beamLow.enabled       = output.truck.lights.beamLow.enabled       == 1 ? true : false
  output.truck.lights.beamHigh.enabled      = output.truck.lights.beamHigh.enabled      == 1 ? true : false
  output.truck.lights.beacon.enabled        = output.truck.lights.beacon.enabled        == 1 ? true : false
  output.truck.lights.brake.enabled         = output.truck.lights.brake.enabled         == 1 ? true : false
  output.truck.lights.reverse.enabled       = output.truck.lights.reverse.enabled       == 1 ? true : false

  // Truck wheels
  const tempTruckWheels    = []
  for (let i = 0; i < output.truck.wheels.count; i++) {
    tempTruckWheels.push({
      substance:      {
        id:    output.truck.wheels.substance[i],
        name : output.substances[output.truck.wheels.substance[i]]
      },
      radius:         output.truck.wheels.radius[i],
      suspDeflection: output.truck.wheels.suspDeflection[i],
      velocity:       output.truck.wheels.velocity[i],
      steering:       output.truck.wheels.steering[i],
      rotation:       output.truck.wheels.rotation[i],
      lift:           output.truck.wheels.lift[i],
      liftOffset:     output.truck.wheels.liftOffset[i],
      position: {
        X: output.truck.wheels.position.X[i],
        Y: output.truck.wheels.position.Y[i],
        Z: output.truck.wheels.position.Z[i],
      },
      steerable:      output.truck.wheels.steerable[i] == 1 ? true : false,
      simulated:      output.truck.wheels.simulated[i] == 1 ? true : false,
      powered:        output.truck.wheels.powered[i]   == 1 ? true : false,
      liftable:       output.truck.wheels.liftable[i]  == 1 ? true : false,
      onGround:       output.truck.wheels.onGround[i]  == 1 ? true : false,
      damage:         output.truck.wheels.damage
    })
  }
  output.truck.wheels = tempTruckWheels

  // Traiers
  if (output.game.pluginVersion < 10) 
    output.trailers = [output.trailer]

  const tmpTrailers = []
  for (let i = 0; i < output.trailers.length; i++) {
    const tmpTrailer = {}
    fixPropNames(output.trailers[i], tmpTrailer)
    tmpTrailers.push(tmpTrailer)
  }

  for (let i = 0; i < tmpTrailers.length; i++) {
    const tmpTrailerWheels = []
    for (let j = 0; j < tmpTrailers[i].wheels.count; j++) {
      tmpTrailerWheels.push({
        substance:      {
          id:    tmpTrailers[i].wheels.substance[j],
          name : output.substances[tmpTrailers[i].wheels.substance[j]]
        },
        radius:         tmpTrailers[i].wheels.radius[j],
        suspDeflection: tmpTrailers[i].wheels.suspDeflection[j],
        velocity:       tmpTrailers[i].wheels.velocity[j],
        steering:       tmpTrailers[i].wheels.steering[j],
        rotation:       tmpTrailers[i].wheels.rotation[j],
        steerable:      tmpTrailers[i].wheels.steerable[j] == 1 ? true : false,
        simulated:      tmpTrailers[i].wheels.simulated[j] == 1 ? true : false,
        powered:        tmpTrailers[i].wheels.powered[j]   == 1 ? true : false,
        liftable:       tmpTrailers[i].wheels.liftable[j]  == 1 ? true : false,
        onGround:       tmpTrailers[i].wheels.onGround[j]  == 1 ? true : false,
        position: {
          X: tmpTrailers[i].wheels.position.X[j],
          Y: tmpTrailers[i].wheels.position.Y[j],
          Z: tmpTrailers[i].wheels.position.Z[j],
        },
      })
    }

    tmpTrailers[i].attached = tmpTrailers[i].attached == 1 ? true : false
    tmpTrailers[i].wheels   = tmpTrailerWheels
  }

  output.trailers = tmpTrailers
  output.trailer  = tmpTrailers[0]

  // Job
  output.job.deliveryTime = convertTime(output.job.deliveryTime)

  // Navigation
  output.navigation.speedLimit = convertSpeed(output.navigation.speedLimit)

  // Events
  output.events.job.active          = output.events.job.active          == 1 ? true : false
  output.events.job.finished.active = output.events.job.finished.active == 1 ? true : false

  if (output.game.pluginVersion < 10) {
    output.events.trailerConnected   = output.events.trailerConnected   == 1 ? true : false
  
    return output
  }

  // SDK 1.10

  // Job
  output.job.cargo.isLoaded = output.job.cargo.isLoaded  == 1 ? true : false
  output.job.isSpecial      = output.job.isSpecial       == 1 ? true : false
  
  // Events
  output.events.job.delivered.autoParked = output.events.job.delivered.autoParked == 1 ? true : false
  output.events.job.delivered.autoLoaded = output.events.job.delivered.autoLoaded == 1 ? true : false
  output.events.job.active               = output.events.job.active               == 1 ? true : false
  output.events.job.finished.active      = output.events.job.finished.active      == 1 ? true : false
  output.events.job.cancelled.active     = output.events.job.cancelled.active     == 1 ? true : false
  output.events.job.delivered.active     = output.events.job.delivered.active     == 1 ? true : false
  output.events.fine.active              = output.events.fine.active              == 1 ? true : false
  output.events.tollgate.active          = output.events.tollgate.active          == 1 ? true : false
  output.events.ferry.active             = output.events.ferry.active             == 1 ? true : false
  output.events.train.active             = output.events.train.active             == 1 ? true : false
  output.events.job.distance             = parseDistance(output.events.job.distance)
  output.events.job.deliveryTime         = output.events.job.deliveryTime * 60000

  return output
  
}

function convertSpeed(input) {
  if (typeof input == "number") input = { value: input }

  input.kph = Math.floor(Math.abs(input.value * 3.6))
  input.mph = Math.floor(Math.abs(input.value * 2.25))

  return input
}

function parseDistance(km) {
  return {
    km,
    miles: Math.floor(km / 1.609)
  }
}

function convertTime(input) {
  // 4 day offset to make the day of the week line up
  // Because the game thinks it's year 1 but unix starts in 1970
  const dateOffset = 345600000
  
  return {
    value: input,
    unix:  input * 60000 + dateOffset
  }
}

function fixPropNames(src, target) {
  for (const key in src) {
    const subKeys = key.split('.')
    let tmpTarget = target
    
    for (let i = 0; i < subKeys.length; i++) {
      if (i < subKeys.length - 1) {
        ensurePropertyExists(tmpTarget, subKeys[i])
        tmpTarget = tmpTarget[subKeys[i]]
      } else {
        ensurePropertyExists(tmpTarget, subKeys[i], src[key])
      }
    }
  }
}

function ensurePropertyExists(target, property, value) {
  if (!target[property]) target[property] = value == undefined ? {} : value
}

module.exports = parseData