const _ = require("struct-fu")

function getDataFromPluginVersion9(buffer) {

  const wheelSize  = 16
  const stringSize = 64

  const entries = _.struct([
    // 1st zone
    _.uint32le("game.timestamp.value"),
    _.uint32le("game.paused"),

    _.padTo(40),

    // 2nd zone
    _.uint32le("game.pluginVersion"),
    _.uint32le("game.version.major"),
    _.uint32le("game.version.minor"),
    _.uint32le("game.game"),
    _.uint32le("game.telemetryVersion.major"),
    _.uint32le("game.telemetryVersion.minor"),
    
    _.uint32le("game.time"),

    _.uint32le("truck.transmission.forwardGears"),
    _.uint32le("truck.transmission.reverseGears"),
    _.uint32le("truck.brakes.retarder.steps"),
    
    _.uint32le("truck.wheels.count"),
    
    _.uint32le("truck.transmission.selector.count"),
    
    _.uint32le("job.deliveryTime"),

    _.uint32le("trailer.wheels.count"),
    
    _.uint32le("truck.transmission.shifter.slot"),
    _.uint32le("truck.brakes.retarder.level"),

    _.uint32le("truck.lights.auxFront.value"),
    _.uint32le("truck.lights.auxRoof.value"),
    
    _.uint32le("trailer.wheels.substance", wheelSize),
    _.uint32le("truck.wheels.substance", wheelSize),
    
    _.uint32le("truck.transmission.slot.handlePosition", 32),
    _.uint32le("truck.transmission.slot.selectors", 32),

    _.padTo(500),

    // 3rd zone
    _.int32le("navigation.nextRestStop"), 

    _.int32le("truck.transmission.gear.selected"),
    _.int32le("truck.transmission.gear.displayed"),
    _.int32le("truck.transmission.slot.gear", 32),

    _.padTo(700),

    // 4th section
    _.float32le("game.scale"),

    _.float32le("truck.fuel.capacity"),
    _.float32le("truck.fuel.warning.factor"),
    _.float32le("truck.adBlue.capacity"),
    _.float32le("truck.adBlue.warning.factor"),
    _.float32le("truck.brakes.airPressure.warning.factor"),
    _.float32le("truck.brakes.airPressure.emergency.factor"),
    _.float32le("truck.engine.oilPressure.warning.factor"),
    _.float32le("truck.engine.waterTemperature.warning.factor"),
    _.float32le("truck.engine.batteryVoltage.warning.factor"),
    _.float32le("truck.engine.rpm.max"),
    _.float32le("truck.ratioDifferential"),
    
    _.float32le("job.cargo.mass"),
    
    _.float32le("truck.wheels.radius", wheelSize),
    _.float32le("trailer.wheels.radius", wheelSize),

    _.float32le("truck.transmission.gearRatiosForward", 24),
    _.float32le("truck.transmission.gearRatiosReverse", 8),
    
    _.float32le("truck.speed"),
    _.float32le("truck.engine.rpm.value"),

    _.float32le("controls.input.steering"),
    _.float32le("controls.input.throttle"),
    _.float32le("controls.input.brake"),
    _.float32le("controls.input.clutch"),
    _.float32le("controls.game.steering"),
    _.float32le("controls.game.throttle"),
    _.float32le("controls.game.brake"),
    _.float32le("controls.game.clutch"),

    _.float32le("truck.cruiseControl.value"),

    _.float32le("truck.brakes.airPressure.value"),
    _.float32le("truck.brakes.temperature.value"),

    _.float32le("truck.fuel.value"),
    _.float32le("truck.fuel.avgConcumption"),
    _.float32le("truck.fuel.range"),
    _.float32le("truck.adBlue.value"),
    _.float32le("truck.engine.oilPressure.value"),
    _.float32le("truck.engine.oilTemperature.value"),
    _.float32le("truck.engine.waterTemperature.value"),
    _.float32le("truck.engine.batteryVoltage.value"),

    _.float32le("truck.lights.dashboardBacklight"),

    _.float32le("truck.engine.wear"),
    _.float32le("truck.transmission.wear"),
    _.float32le("truck.cabin.wear"),
    _.float32le("truck.chassis.wear"),
    _.float32le("truck.wheels.wear"),
    
    _.float32le("trailer.wear"),

    _.float32le("truck.odometer"),
    
    _.float32le("navigation.distance"),
    _.float32le("navigation.time"),
    _.float32le("navigation.speedLimit"),

    _.float32le("trailer.wheels.suspDeflection", wheelSize),
    _.float32le("truck.wheels.suspDeflection", wheelSize),

    _.float32le("trailer.wheels.velocity", wheelSize),
    _.float32le("truck.wheels.velocity", wheelSize),

    _.float32le("trailer.wheels.steering", wheelSize),
    _.float32le("truck.wheels.steering", wheelSize),

    _.float32le("trailer.wheels.rotation", wheelSize),
    _.float32le("truck.wheels.rotation", wheelSize),
    
    _.float32le("truck.wheels.lift", wheelSize),
    _.float32le("truck.wheels.liftOffset", wheelSize),
    
    _.padTo(1800),

    // 5th zone
    _.uint8("truck.wheels.steerable", wheelSize),
    _.uint8("truck.wheels.simulated", wheelSize),
    _.uint8("truck.wheels.powered", wheelSize),
    _.uint8("truck.wheels.liftable", wheelSize),

    _.uint8("trailer.wheels.steerable", wheelSize),
    _.uint8("trailer.wheels.simulated", wheelSize),
    _.uint8("trailer.wheels.powered", wheelSize),
    _.uint8("trailer.wheels.liftable", wheelSize),

    _.uint8("trailer.attached"),

    _.uint8("truck.brakes.parking.enabled"),
    _.uint8("truck.brakes.motor.enabled"),
    _.uint8("truck.engine.airPressure.warning.enabled"),
    _.uint8("truck.engine.airPressure.emergency.enabled"),
    _.uint8("truck.fuel.warning.enabled"),
    _.uint8("truck.adBlue.warning.enabled"),
    _.uint8("truck.engine.oilPressure.warning.enabled"),
    _.uint8("truck.engine.waterTemperature.warning.enabled"),
    _.uint8("truck.engine.batteryVoltage.warning.enabled"),
    _.uint8("truck.electric.enabled"),
    _.uint8("truck.engine.enabled"),
    _.uint8("truck.wipers.enabled"),

    _.uint8("truck.lights.blinker.left.enabled"),
    _.uint8("truck.lights.blinker.right.enabled"),
    _.uint8("truck.lights.blinker.left.active"),
    _.uint8("truck.lights.blinker.right.active"),
    _.uint8("truck.lights.parking.enabled"),
    _.uint8("truck.lights.beamLow.enabled"),
    _.uint8("truck.lights.beamHigh.enabled"),
    _.uint8("truck.lights.beacon.enabled"),
    _.uint8("truck.lights.brake.enabled"),
    _.uint8("truck.lights.reverse.enabled"),

    _.uint8("truck.cruiseControl.enabled"),

    _.uint8("trailer.wheels.onGround", wheelSize),
    _.uint8("truck.wheels.onGround", wheelSize),

    _.uint8("truck.transmission.shifter.selector", 2),

    _.padTo(2000),

    // 6th zone   
    _.float32le("truck.cabin.position.X"),
    _.float32le("truck.cabin.position.Y"),
    _.float32le("truck.cabin.position.Z"),

    _.float32le("truck.head.position.X"),
    _.float32le("truck.head.position.Y"),
    _.float32le("truck.head.position.Z"),

    _.float32le("truck.hook.position.X"),
    _.float32le("truck.hook.position.Y"),
    _.float32le("truck.hook.position.Z"),

    _.float32le("truck.wheels.position.0.X"),
    _.float32le("truck.wheels.position.1.X"),
    _.float32le("truck.wheels.position.2.X"),
    _.float32le("truck.wheels.position.3.X"),
    _.float32le("truck.wheels.position.4.X"),
    _.float32le("truck.wheels.position.5.X"),
    _.float32le("truck.wheels.position.6.X"),
    _.float32le("truck.wheels.position.7.X"),
    _.float32le("truck.wheels.position.8.X"),
    _.float32le("truck.wheels.position.9.X"),
    _.float32le("truck.wheels.position.10.X"),
    _.float32le("truck.wheels.position.11.X"),
    _.float32le("truck.wheels.position.12.X"),
    _.float32le("truck.wheels.position.13.X"),
    _.float32le("truck.wheels.position.14.X"),
    _.float32le("truck.wheels.position.15.X"),

    _.float32le("truck.wheels.position.0.Y"),
    _.float32le("truck.wheels.position.1.Y"),
    _.float32le("truck.wheels.position.2.Y"),
    _.float32le("truck.wheels.position.3.Y"),
    _.float32le("truck.wheels.position.4.Y"),
    _.float32le("truck.wheels.position.5.Y"),
    _.float32le("truck.wheels.position.6.Y"),
    _.float32le("truck.wheels.position.7.Y"),
    _.float32le("truck.wheels.position.8.Y"),
    _.float32le("truck.wheels.position.9.Y"),
    _.float32le("truck.wheels.position.10.Y"),
    _.float32le("truck.wheels.position.11.Y"),
    _.float32le("truck.wheels.position.12.Y"),
    _.float32le("truck.wheels.position.13.Y"),
    _.float32le("truck.wheels.position.14.Y"),
    _.float32le("truck.wheels.position.15.Y"),

    _.float32le("truck.wheels.position.0.Z"),
    _.float32le("truck.wheels.position.1.Z"),
    _.float32le("truck.wheels.position.2.Z"),
    _.float32le("truck.wheels.position.3.Z"),
    _.float32le("truck.wheels.position.4.Z"),
    _.float32le("truck.wheels.position.5.Z"),
    _.float32le("truck.wheels.position.6.Z"),
    _.float32le("truck.wheels.position.7.Z"),
    _.float32le("truck.wheels.position.8.Z"),
    _.float32le("truck.wheels.position.9.Z"),
    _.float32le("truck.wheels.position.10.Z"),
    _.float32le("truck.wheels.position.11.Z"),
    _.float32le("truck.wheels.position.12.Z"),
    _.float32le("truck.wheels.position.13.Z"),
    _.float32le("truck.wheels.position.14.Z"),
    _.float32le("truck.wheels.position.15.Z"),

    _.float32le("trailer.hook.position.X"),
    _.float32le("trailer.hook.position.Y"),
    _.float32le("trailer.hook.position.Z"),

    _.float32le("trailer.wheels.position.0.X"),
    _.float32le("trailer.wheels.position.1.X"),
    _.float32le("trailer.wheels.position.2.X"),
    _.float32le("trailer.wheels.position.3.X"),
    _.float32le("trailer.wheels.position.4.X"),
    _.float32le("trailer.wheels.position.5.X"),
    _.float32le("trailer.wheels.position.6.X"),
    _.float32le("trailer.wheels.position.7.X"),
    _.float32le("trailer.wheels.position.8.X"),
    _.float32le("trailer.wheels.position.9.X"),
    _.float32le("trailer.wheels.position.10.X"),
    _.float32le("trailer.wheels.position.11.X"),
    _.float32le("trailer.wheels.position.12.X"),
    _.float32le("trailer.wheels.position.13.X"),
    _.float32le("trailer.wheels.position.14.X"),
    _.float32le("trailer.wheels.position.15.X"),

    _.float32le("trailer.wheels.position.0.Y"),
    _.float32le("trailer.wheels.position.1.Y"),
    _.float32le("trailer.wheels.position.2.Y"),
    _.float32le("trailer.wheels.position.3.Y"),
    _.float32le("trailer.wheels.position.4.Y"),
    _.float32le("trailer.wheels.position.5.Y"),
    _.float32le("trailer.wheels.position.6.Y"),
    _.float32le("trailer.wheels.position.7.Y"),
    _.float32le("trailer.wheels.position.8.Y"),
    _.float32le("trailer.wheels.position.9.Y"),
    _.float32le("trailer.wheels.position.10.Y"),
    _.float32le("trailer.wheels.position.11.Y"),
    _.float32le("trailer.wheels.position.12.Y"),
    _.float32le("trailer.wheels.position.13.Y"),
    _.float32le("trailer.wheels.position.14.Y"),
    _.float32le("trailer.wheels.position.15.Y"),

    _.float32le("trailer.wheels.position.0.Z"),
    _.float32le("trailer.wheels.position.1.Z"),
    _.float32le("trailer.wheels.position.2.Z"),
    _.float32le("trailer.wheels.position.3.Z"),
    _.float32le("trailer.wheels.position.4.Z"),
    _.float32le("trailer.wheels.position.5.Z"),
    _.float32le("trailer.wheels.position.6.Z"),
    _.float32le("trailer.wheels.position.7.Z"),
    _.float32le("trailer.wheels.position.8.Z"),
    _.float32le("trailer.wheels.position.9.Z"),
    _.float32le("trailer.wheels.position.10.Z"),
    _.float32le("trailer.wheels.position.11.Z"),
    _.float32le("trailer.wheels.position.12.Z"),
    _.float32le("trailer.wheels.position.13.Z"),
    _.float32le("trailer.wheels.position.14.Z"),
    _.float32le("trailer.wheels.position.15.Z"),

    _.struct("trailer.acceleration.linearVelocity", [
      _.float32le("X"),
      _.float32le("Y"),
      _.float32le("Z"),
    ]),

    _.struct("truck.acceleration.linearVelocity", [
      _.float32le("X"),
      _.float32le("Y"),
      _.float32le("Z"),
    ]),

    _.struct("trailer.acceleration.angularVelocity", [
      _.float32le("X"),
      _.float32le("Y"),
      _.float32le("Z"),
    ]),

    _.struct("truck.acceleration.angularVelocity", [
      _.float32le("X"),
      _.float32le("Y"),
      _.float32le("Z"),
    ]),

    _.struct("trailer.acceleration.linearAcceleration", [
      _.float32le("X"),
      _.float32le("Y"),
      _.float32le("Z"),
    ]),

    _.struct("truck.acceleration.linearAcceleration", [
      _.float32le("X"),
      _.float32le("Y"),
      _.float32le("Z"),
    ]),

    _.struct("trailer.acceleration.angularAcceleration", [
      _.float32le("X"),
      _.float32le("Y"),
      _.float32le("Z"),
    ]),

    _.struct("truck.acceleration.angularAcceleration", [
      _.float32le("X"),
      _.float32le("Y"),
      _.float32le("Z"),
    ]),

    _.struct("truck.cabin.acceleration.angularVelocity", [
      _.float32le("X"),
      _.float32le("Y"),
      _.float32le("Z"),
    ]),

    _.struct("truck.cabin.acceleration.angularAcceleration", [
      _.float32le("X"),
      _.float32le("Y"),
      _.float32le("Z"),
    ]),

    _.padTo(2600),

    // 7th zone
    _.struct("truck.cabin.offset.position", [
      _.float32le("X"),
      _.float32le("Y"),
      _.float32le("Z"),
    ]),

    _.struct("truck.cabin.offset.orientation", [
      _.float32le("heading"),
      _.float32le("pitch"),
      _.float32le("roll"),
    ]),

    _.struct("truck.head.offset.position", [
      _.float32le("X"),
      _.float32le("Y"),
      _.float32le("Z"),
    ]),

    _.struct("truck.head.offset.orientation", [
      _.float32le("heading"),
      _.float32le("pitch"),
      _.float32le("roll"),
    ]),

    _.padTo(2800),

    // 8th zone
    _.struct("truck.position", [
      _.float64le("X"),
      _.float64le("Y"),
      _.float64le("Z"),
    ]),

    _.struct("truck.orientation", [
      _.float64le("heading"),
      _.float64le("pitch"),
      _.float64le("roll"),
    ]),

    _.struct("trailer.position", [
      _.float64le("X"),
      _.float64le("Y"),
      _.float64le("Z"),
    ]),

    _.struct("trailer.orientation", [
      _.float64le("heading"),
      _.float64le("pitch"),
      _.float64le("roll"),
    ]),

    _.padTo(3000),
    
    // 9th zone
    _.char("truck.brand.id", stringSize),
    _.char("truck.brand.name", stringSize),

    _.char("truck.id", stringSize),
    _.char("trailer.id", stringSize),
    
    _.char("job.cargo.accessoryId", stringSize),
    
    _.char("truck.model", stringSize),
    
    _.char("job.cargo.id", stringSize),
    _.char("job.cargo.name", stringSize),
    _.char("job.destination.city.id", stringSize),
    _.char("job.destination.city.name", stringSize),
    _.char("job.destination.company.id", stringSize),
    _.char("job.destination.company.name", stringSize),
    _.char("job.source.city.id", stringSize),
    _.char("job.source.city.name", stringSize),
    _.char("job.source.company.id", stringSize),
    _.char("job.source.company.name", stringSize),

    _.char("truck.transmission.shifter.type", 16),

    _.padTo(4800),

    // 10th zone
    _.uint32le("job.income"),

    _.padTo(5000),

    // 11th zone
    _.uint8("specialEvent.onJob"),
    _.uint8("specialEvent.jobFinished"),
    _.uint8("specialEvent.trailerConnected"),

    _.padTo(5200),

    // 12th zone
    _.char("substances.0", stringSize),
    _.char("substances.1", stringSize),
    _.char("substances.2", stringSize),
    _.char("substances.3", stringSize),
    _.char("substances.4", stringSize),
    _.char("substances.5", stringSize),
    _.char("substances.6", stringSize),
    _.char("substances.7", stringSize),
    _.char("substances.8", stringSize),
    _.char("substances.9", stringSize),
    _.char("substances.10", stringSize),
    _.char("substances.11", stringSize),
    _.char("substances.12", stringSize),
    _.char("substances.13", stringSize),
    _.char("substances.14", stringSize),
    _.char("substances.15", stringSize),
  ])

  return entries.unpack(buffer)
  
}

module.exports = getDataFromPluginVersion9