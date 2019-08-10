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

  output.game.version          = `${output.game.version.major}.${output.game.version.minor}`
  output.game.telemetryVersion = `${output.game.telemetryVersion.major}.${output.game.telemetryVersion.minor}`
  output.game.paused = output.game.paused == 1 ? true : false
  output.game.game = {
    id:   output.game.game,
    name: ["unknown", "ets2", "ats"][output.game.game]
  }

  output.game.time        = convertTime(output.game.time)
  output.job.deliveryTime = convertTime(output.job.deliveryTime)

  output.navigation.speedLimit = convertSpeed(output.navigation.speedLimit)
  output.truck.speed           = convertSpeed(output.truck.speed)
  output.truck.cruiseControl   = convertSpeed(output.truck.cruiseControl)

  output.truck.wheels.position   = convertToArray(output.truck.wheels.position)
  output.trailer.wheels.position = convertToArray(output.trailer.wheels.position)
  output.substances              = convertToArray(output.substances)


  for (let i = 0; i < output.truck.wheels.steerable.length; i++)
    output.truck.wheels.steerable[i] = output.truck.wheels.steerable[i] == 1 ? true : false

  for (let i = 0; i < output.truck.wheels.simulated.length; i++)
    output.truck.wheels.simulated[i] = output.truck.wheels.simulated[i] == 1 ? true : false

  for (let i = 0; i < output.truck.wheels.powered.length; i++)
    output.truck.wheels.powered[i] = output.truck.wheels.powered[i] == 1 ? true : false

  for (let i = 0; i < output.truck.wheels.liftable.length; i++)
    output.truck.wheels.liftable[i] = output.truck.wheels.liftable[i] == 1 ? true : false

  for (let i = 0; i < output.trailer.wheels.steerable.length; i++)
    output.trailer.wheels.steerable[i] = output.trailer.wheels.steerable[i] == 1 ? true : false

  for (let i = 0; i < output.trailer.wheels.simulated.length; i++)
    output.trailer.wheels.simulated[i] = output.trailer.wheels.simulated[i] == 1 ? true : false

  for (let i = 0; i < output.trailer.wheels.powered.length; i++)
    output.trailer.wheels.powered[i] = output.trailer.wheels.powered[i] == 1 ? true : false

  for (let i = 0; i < output.trailer.wheels.liftable.length; i++)
    output.trailer.wheels.liftable[i] = output.trailer.wheels.liftable[i] == 1 ? true : false

  output.trailer.attached = output.trailer.attached == 1 ? true : false

  output.truck.brakes.parking.enabled                  = output.truck.brakes.parking.enabled                  == 1 ? true : false
  output.truck.brakes.motor.enabled                    = output.truck.brakes.motor.enabled                    == 1 ? true : false
  output.truck.engine.airPressure.warning.enabled      = output.truck.engine.airPressure.warning.enabled      == 1 ? true : false
  output.truck.engine.airPressure.emergency.enabled    = output.truck.engine.airPressure.emergency.enabled    == 1 ? true : false
  output.truck.fuel.warning.enabled                    = output.truck.fuel.warning.enabled                    == 1 ? true : false
  output.truck.adBlue.warning.enabled                  = output.truck.adBlue.warning.enabled                  == 1 ? true : false
  output.truck.engine.oilPressure.warning.enabled      = output.truck.engine.oilPressure.warning.enabled      == 1 ? true : false
  output.truck.engine.waterTemperature.warning.enabled = output.truck.engine.waterTemperature.warning.enabled == 1 ? true : false
  output.truck.engine.batteryVoltage.warning.enabled   = output.truck.engine.batteryVoltage.warning.enabled   == 1 ? true : false
  output.truck.electric.enabled                        = output.truck.electric.enabled                        == 1 ? true : false
  output.truck.engine.enabled                          = output.truck.engine.enabled                          == 1 ? true : false
  output.truck.wipers.enabled                          = output.truck.wipers.enabled                          == 1 ? true : false

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

  output.truck.cruiseControl.enabled = output.truck.cruiseControl.enabled == 1 ? true : false

  for (let i = 0; i < output.trailer.wheels.onGround.length; i++)
    output.trailer.wheels.onGround[i] = output.trailer.wheels.onGround[i] == 1 ? true : false

  for (let i = 0; i < output.truck.wheels.onGround.length; i++)
    output.truck.wheels.onGround[i] = output.truck.wheels.onGround[i] == 1 ? true : false

  for (let i = 0; i < output.truck.transmission.shifter.selector.length; i++)
    output.truck.transmission.shifter.selector[i] = output.truck.transmission.shifter.selector[i] == 1 ? true : false

  output.specialEvent.onJob            = output.specialEvent.onJob            == 1 ? true : false
  output.specialEvent.jobFinished      = output.specialEvent.jobFinished      == 1 ? true : false
  output.specialEvent.trailerConnected = output.specialEvent.trailerConnected == 1 ? true : false

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