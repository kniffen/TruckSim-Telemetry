function parseData(data) {
  const output = {}

  for (const key in data) {
    const subKeys = key.split('.')
    let target = output
    
    for (let i = 0; i < subKeys.length; i++) {
      if (i < subKeys.length - 1) {
        ensurePropertyExists(target, subKeys[i])
        target = target[subKeys[i]]
      } else {
        ensurePropertyExists(target, subKeys[i], data[key])
      }
    }
  }

  // Game
  output.game.version          = `${output.game.version.major}.${output.game.version.minor}`
  output.game.telemetryVersion = `${output.game.telemetryVersion.major}.${output.game.telemetryVersion.minor}`
  output.game.paused           = output.game.paused == 1 ? true : false
  output.game.game             = {id:   output.game.game, name: ["unknown", "ets2", "ats"][output.game.game]}
  output.game.time             = convertTime(output.game.time)

  // Substances
  output.substances = convertToArray(output.substances)

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
  const truckWheelPosition = convertToArray(output.truck.wheels.position)

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
      position:       truckWheelPosition[i],
      steerable:      output.truck.wheels.steerable[i] == 1 ? true : false,
      simulated:      output.truck.wheels.simulated[i] == 1 ? true : false,
      powered:        output.truck.wheels.powered[i]   == 1 ? true : false,
      liftable:       output.truck.wheels.liftable[i]  == 1 ? true : false,
      onGround:       output.truck.wheels.onGround[i]  == 1 ? true : false,
      damage:         output.truck.wheels.damage
    })
  }
  output.truck.wheels = tempTruckWheels

  // Trailer
 output.trailer.attached = output.trailer.attached == 1 ? true : false
 output.trailer.hasCargo = output.trailer.hasCargo == 1 ? true : false

  // Trailer wheels
  const tempTrailerWheels     = []
  const trailerWheelPositions = convertToArray(output.trailer.wheels.position)

  for (let i = 0; i < output.trailer.wheels.count; i++) {
    tempTrailerWheels.push({
      substance:      {
        id:    output.trailer.wheels.substance[i],
        name : output.substances[output.trailer.wheels.substance[i]]
      },
      radius:         output.trailer.wheels.radius[i],
      suspDeflection: output.trailer.wheels.suspDeflection[i],
      velocity:       output.trailer.wheels.velocity[i],
      steering:       output.trailer.wheels.steering[i],
      rotation:       output.trailer.wheels.rotation[i],
      position:       trailerWheelPositions[i],
      steerable:      output.trailer.wheels.steerable[i] == 1 ? true : false,
      simulated:      output.trailer.wheels.simulated[i] == 1 ? true : false,
      powered:        output.trailer.wheels.powered[i]   == 1 ? true : false,
      liftable:       output.trailer.wheels.liftable[i]  == 1 ? true : false,
      onGround:       output.trailer.wheels.onGround[i]  == 1 ? true : false,
      damage:         output.trailer.wheels.damage
    })
  }
  output.trailer.wheels = tempTrailerWheels

  // Job
  output.job.deliveryTime = convertTime(output.job.deliveryTime)
  output.job.active       = output.job.active == 1 ? true : false
  output.job.finished     = output.job.finished == 1 ? true : false

  // Navigation
  output.navigation.speedLimit = convertSpeed(output.navigation.speedLimit)

  return output

}

function convertSpeed(input) {
  if (typeof input == "number") input = { value: input }

  input.kph = Math.floor(input.value * 3.6)
  input.mph = Math.floor(input.value * 2.25)

  return input
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

function convertToArray(target) {
  const arr = []

  for (const i in target) arr.push(target[i])

  return arr
}

function ensurePropertyExists(target, property, value) {
  if (!target[property]) target[property] = value == undefined ? {} : value
}

module.exports = parseData