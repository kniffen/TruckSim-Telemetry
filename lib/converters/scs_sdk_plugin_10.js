const _ = require('struct-fu')

const wheelSize    = 16
const stringSize   = 64
const trailerCount = 7 // TODO: It should be 10 but it complains about the offset being out of range

function getDataFromPluginVersion10(buffer) {
  const entries = _.struct([
    // 1st zone
    _.bool("game.sdkActive"),
    _.padTo(4),
    _.bool("game.paused"),
    _.padTo(8),
    _.uint32le("game.timestamp.value", 2),
    _.uint32le("game.simulationTimestamp.value", 2),
    _.uint32le("game.renderTimestamp.value", 2),

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
    
    _.uint32le("truck.transmission.selectors"),
    
    _.uint32le("job.deliveryTime"),

    _.uint32le("game.maxTrailerCount"),

    _.uint32le("trailer.cargo.units"),

    _.uint32le("job.plannedDistance.km"),
    
    _.uint32le("truck.transmission.slot"),
    _.uint32le("truck.brakes.retarder.level"),

    _.uint32le("truck.lights.auxFront.value"),
    _.uint32le("truck.lights.auxRoof.value"),
    
    _.uint32le("truck.wheels.substance", wheelSize),
    
    _.uint32le("truck.transmission.slots.handlePosition", 32),
    _.uint32le("truck.transmission.slots.selector", 32),

    _.uint32le("events.job.delivered.deliveryTime"),
    _.uint32le("events.job.delivered.startingTime"),
    _.uint32le("events.job.delivered.finishingTime"),

    _.padTo(500),

    // 3rd zone
    _.int32le("navigation.nextRestStop"), 

    _.int32le("truck.transmission.gear.selected"),
    _.int32le("truck.transmission.gear.displayed"),
    _.int32le("truck.transmission.slots.gear", 32),

    _.int32le("events.job.delivered.earnedXP"),

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
    _.float32le("truck.differential.ratio"),
    
    _.float32le("job.cargo.mass"),
    
    _.float32le("truck.wheels.radius", wheelSize),

    _.float32le("truck.transmission.gearRatiosForward", 24),
    _.float32le("truck.transmission.gearRatiosReverse", 8),

    _.float32le("job.cargo.unitMass"),
    
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
    _.float32le("truck.fuel.avgConsumption"),
    _.float32le("truck.fuel.range"),
    _.float32le("truck.adBlue.value"),
    _.float32le("truck.engine.oilPressure.value"),
    _.float32le("truck.engine.oilTemperature.value"),
    _.float32le("truck.engine.waterTemperature.value"),
    _.float32le("truck.engine.batteryVoltage.value"),

    _.float32le("truck.lights.dashboardBacklight"),

    _.float32le("truck.engine.damage"),
    _.float32le("truck.transmission.damage"),
    _.float32le("truck.cabin.damage"),
    _.float32le("truck.chassis.damage"),
    _.float32le("truck.wheels.damage"),
    
    _.float32le("truck.odometer"),
    
    _.float32le("navigation.distance"),
    _.float32le("navigation.time"),
    _.float32le("navigation.speedLimit"),

    _.float32le("truck.wheels.suspDeflection", wheelSize),
    _.float32le("truck.wheels.velocity", wheelSize),
    _.float32le("truck.wheels.steering", wheelSize),
    _.float32le("truck.wheels.rotation", wheelSize),

    _.float32le("truck.wheels.lift", wheelSize),
    _.float32le("truck.wheels.liftOffset", wheelSize),

    _.float32le("events.job.delivered.cargoDamage"),
    _.float32le("events.job.delivered.distance.km"),
    
    _.float32le("events.refuelPaid.amount"),

    _.float32le("job.cargo.damage"),
    
    _.padTo(1500),

    // 5th zone
    _.bool("truck.wheels.steerable", wheelSize),
    _.bool("truck.wheels.simulated", wheelSize),
    _.bool("truck.wheels.powered", wheelSize),
    _.bool("truck.wheels.liftable", wheelSize),
    
    _.bool("job.cargo.isLoaded"),
    _.bool("job.isSpecial"),

    _.bool("truck.brakes.parking.enabled"),
    _.bool("truck.brakes.motor.enabled"),
    _.bool("truck.brakes.airPressure.warning.enabled"),
    _.bool("truck.brakes.airPressure.emergency.enabled"),
    _.bool("truck.fuel.warning.enabled"),
    _.bool("truck.adBlue.warning.enabled"),
    _.bool("truck.engine.oilPressure.warning.enabled"),
    _.bool("truck.engine.waterTemperature.warning.enabled"),
    _.bool("truck.engine.batteryVoltage.warning.enabled"),
    _.bool("truck.electric.enabled"),
    _.bool("truck.engine.enabled"),
    _.bool("truck.wipers.enabled"),

    _.bool("truck.lights.blinker.left.enabled"),
    _.bool("truck.lights.blinker.right.enabled"),
    _.bool("truck.lights.blinker.left.active"),
    _.bool("truck.lights.blinker.right.active"),
    _.bool("truck.lights.parking.enabled"),
    _.bool("truck.lights.beamLow.enabled"),
    _.bool("truck.lights.beamHigh.enabled"),
    _.bool("truck.lights.beacon.enabled"),
    _.bool("truck.lights.brake.enabled"),
    _.bool("truck.lights.reverse.enabled"),

    _.bool("truck.cruiseControl.enabled"),

    _.bool("truck.wheels.onGround", wheelSize),

    _.bool("truck.transmission.selector", 2),

    _.bool("events.job.delivered.autoParked"),
    _.bool("events.job.started.autoLoaded"),

    _.padTo(1640),

    // 6th zone
    _.struct("truck.cabin.position", [
        _.float32le("X"),
        _.float32le("Y"),
        _.float32le("Z"),
    ]),

    _.struct("truck.head.position", [
        _.float32le("X"),
        _.float32le("Y"),
        _.float32le("Z"),
    ]),

    _.struct("truck.hook.position", [
        _.float32le("X"),
        _.float32le("Y"),
        _.float32le("Z"),
    ]),

    _.float32le("truck.wheels.position.X", 16),
    _.float32le("truck.wheels.position.Y", 16),
    _.float32le("truck.wheels.position.Z", 16),

    _.struct("truck.acceleration.linearVelocity", [
      _.float32le("X"),
      _.float32le("Y"),
      _.float32le("Z"),
    ]),

    _.struct("truck.acceleration.angularVelocity", [
      _.float32le("X"),
      _.float32le("Y"),
      _.float32le("Z"),
    ]),

    _.struct("truck.acceleration.linearAcceleration", [
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

    _.padTo(2000),

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

    _.padTo(2200),

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

    _.padTo(2300),
    
    // 9th zone
    _.char("truck.make.id", stringSize),
    _.char("truck.make.name", stringSize),

    _.char("truck.model.id", stringSize),
    _.char("truck.model.name", stringSize),

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

    _.char("truck.transmission.shifterType", 16),
    
    _.char("truck.licensePlate.value", stringSize),
    _.char("truck.licensePlate.country.id", stringSize),
    _.char("truck.licensePlate.country.name", stringSize),

    _.char("job.market", 32),

    _.char("events.fine.offence", 32),

    _.char("events.ferry.source.name", stringSize),
    _.char("events.ferry.destination.name", stringSize),
    _.char("events.ferry.source.id", stringSize),
    _.char("events.ferry.destination.id", stringSize),

    _.char("events.train.source.name", stringSize),
    _.char("events.train.destination.name", stringSize),
    _.char("events.train.source.id", stringSize),
    _.char("events.train.destination.id", stringSize),

    _.padTo(4000),

    // 10th zone
    _.uint32le("job.income"),

    _.padTo(4200),

    // 11th zone
    _.uint32le("events.job.cancelled.penalty", 2),
    _.uint32le("events.job.delivered.revenue", 2),
    _.uint32le("events.fine.amount", 2),
    _.uint32le("events.tollgate.amount", 2),
    _.uint32le("events.ferry.amount", 2),
    _.uint32le("events.train.amount", 2),

    _.padTo(4300),

    // 12th zone
    _.bool("events.job.started.active"),
    _.bool("events.job.finished.active"),
    _.bool("events.job.cancelled.active"),
    _.bool("events.job.delivered.active"),
    _.bool("events.fine.active"),
    _.bool("events.tollgate.active"),
    _.bool("events.ferry.active"),
    _.bool("events.train.active"),
    _.bool("events.refuel.active"),
    _.bool("events.refuelPaid.active"),
    
    _.padTo(4400),
    
    // 13th zone
    _.char("substances", stringSize, 16),

    _.padTo(6000),
    
    // 14th zone
    _.struct("trailers", [
      _.bool("wheels.steerable", wheelSize),
      _.bool("wheels.simulated", wheelSize),
      _.bool("wheels.powered", wheelSize),
      _.bool("wheels.liftable", wheelSize),
      _.bool("wheels.onGround", wheelSize),

      _.bool("attached"),

      _.padTo(84),

      _.uint32le("wheels.substance", wheelSize),
      _.uint32le("wheels.count"),

      _.padTo(152),

      _.float32le("cargo.damage"),
      _.float32le("chassis.damage"),
      _.float32le("wheels.damage"),

      _.float32le("wheels.suspDeflection", wheelSize),
      _.float32le("wheels.velocity", wheelSize),
      _.float32le("wheels.steering", wheelSize),
      _.float32le("wheels.rotation", wheelSize),
      _.float32le("wheels.lift", wheelSize),
      _.float32le("wheels.liftOffset", wheelSize),
      _.float32le("wheels.radius", wheelSize),

      _.padTo(612),

      _.struct("acceleration.linearVelocity", [
        _.float32le("X"),
        _.float32le("Y"),
        _.float32le("Z"),
      ]),

      _.struct("acceleration.angularVelocity", [
        _.float32le("X"),
        _.float32le("Y"),
        _.float32le("Z"),
      ]),

      _.struct("acceleration.linearAcceleration", [
        _.float32le("X"),
        _.float32le("Y"),
        _.float32le("Z"),
      ]),

      _.struct("acceleration.angularAcceleration", [
        _.float32le("X"),
        _.float32le("Y"),
        _.float32le("Z"),
      ]),

      _.struct("hook.position", [
        _.float32le("X"),
        _.float32le("Y"),
        _.float32le("Z"),
      ]),

      _.float32le("wheels.position.X", 16),
      _.float32le("wheels.position.Y", 16),
      _.float32le("wheels.position.Z", 16),

      _.padTo(864),
    
      _.struct("position", [
        _.float64le("X"),
        _.float64le("Y"),
        _.float64le("Z"),
      ]),

      _.struct("orientation", [
        _.float64le("heading"),
        _.float64le("pitch"),
        _.float64le("roll"),
      ]),

      _.padTo(912),

      _.char("model.id", stringSize),
      _.char("accessoryId", stringSize),
      _.char("bodyType", stringSize),
      _.char("make.id", stringSize),
      _.char("make.name", stringSize),
      _.char("model.name", stringSize),
      _.char("chainType", stringSize),
      _.char("licensePlate.value", stringSize),
      _.char("licensePlate.country.name", stringSize),
      _.char("licensePlate.country.id", stringSize),

    ], trailerCount),

  ])

  return entries.unpack(buffer)
  
}

module.exports = getDataFromPluginVersion10