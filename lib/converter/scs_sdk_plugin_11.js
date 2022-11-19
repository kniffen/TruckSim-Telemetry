const _  = require('struct-fu')

const {
  boolUint8,
  uint64le,
  versionUint32LE,
  gameUint32LE,
  timeUint32LE,
  speedFloat32LE,
  distanceFloat32LE,
  distanceUint32le,
  identityChar32
} = require('./derivatives.js')

const wheelSize    = 16
const stringSize   = 64
const trailerCount = 10

const pluginV11Structure = _.struct([
  // 1st zone
  boolUint8("game.sdkActive"),
  _.padTo(4),
  boolUint8("game.paused"),
  _.padTo(8),
  uint64le("game.timestamp.value"),
  uint64le("game.simulationTimestamp.value"),
  uint64le("game.renderTimestamp.value"),

  _.padTo(40),

  // 2nd zone
  _.uint32le("game.pluginVersion"),
  versionUint32LE("game.version"),
  gameUint32LE("game.game"),
  versionUint32LE("game.telemetryVersion"),
  
  timeUint32LE("game.time"),

  _.uint32le("truck.transmission.forwardGears"),
  _.uint32le("truck.transmission.reverseGears"),
  _.uint32le("truck.brakes.retarder.steps"),
  
  _.uint32le("truck.wheels.count"),
  
  _.uint32le("truck.transmission.selectors"),
  
  timeUint32LE("job.expectedDeliveryTimestamp"),

  _.uint32le("game.maxTrailerCount"),

  _.uint32le("trailer.cargo.units"),

  distanceUint32le("job.plannedDistance"),
  
  _.uint32le("truck.transmission.slot"),
  _.uint32le("truck.brakes.retarder.level"),

  _.uint32le("truck.lights.auxFront.value"),
  _.uint32le("truck.lights.auxRoof.value"),
  
  _.uint32le("truck.wheels.substance", wheelSize),
  
  _.uint32le("truck.transmission.slots.handlePosition", 32),
  _.uint32le("truck.transmission.slots.selector", 32),

  (_.derive(_.uint32le(), null, (val) => val * 60000))("events.job.delivered.timeTaken"),// TODO: Remove this and just use the value
  timeUint32LE("events.job.delivered.startedTimestamp"),
  timeUint32LE("events.job.delivered.deliveredTimestamp"),

  _.padTo(500),

  // 3rd zone
  (_.derive(_.int32le(), null, (val) => val * 60000))("navigation.nextRestStop"),// TODO: Remove this and just use the value

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
  
  speedFloat32LE("truck.speed"),
  _.float32le("truck.engine.rpm.value"),

  _.float32le("controls.input.steering"),
  _.float32le("controls.input.throttle"),
  _.float32le("controls.input.brake"),
  _.float32le("controls.input.clutch"),
  _.float32le("controls.game.steering"),
  _.float32le("controls.game.throttle"),
  _.float32le("controls.game.brake"),
  _.float32le("controls.game.clutch"),

  speedFloat32LE("truck.cruiseControl"),

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
  (_.derive(_.float32le(), null, (val) => val * 1000))("navigation.time"),// TODO: Remove this and just use the value
  speedFloat32LE("navigation.speedLimit"),

  _.float32le("truck.wheels.suspDeflection", wheelSize),
  _.float32le("truck.wheels.velocity", wheelSize),
  _.float32le("truck.wheels.steering", wheelSize),
  _.float32le("truck.wheels.rotation", wheelSize),

  _.float32le("truck.wheels.lift", wheelSize),
  _.float32le("truck.wheels.liftOffset", wheelSize),

  _.float32le("events.job.delivered.cargoDamage"),
  distanceFloat32LE("events.job.delivered.distance"),
  
  _.float32le("events.refuelPaid.amount"),

  _.float32le("job.cargo.damage"),
  
  _.padTo(1500),

  // 5th zone
  boolUint8("truck.wheels.steerable", wheelSize),
  boolUint8("truck.wheels.simulated", wheelSize),
  boolUint8("truck.wheels.powered", wheelSize),
  boolUint8("truck.wheels.liftable", wheelSize),
  
  boolUint8("job.cargo.isLoaded"),
  boolUint8("job.isSpecial"),

  boolUint8("truck.brakes.parking.enabled"),
  boolUint8("truck.brakes.motor.enabled"),
  boolUint8("truck.brakes.airPressure.warning.enabled"),
  boolUint8("truck.brakes.airPressure.emergency.enabled"),
  boolUint8("truck.fuel.warning.enabled"),
  boolUint8("truck.adBlue.warning.enabled"),
  boolUint8("truck.engine.oilPressure.warning.enabled"),
  boolUint8("truck.engine.waterTemperature.warning.enabled"),
  boolUint8("truck.engine.batteryVoltage.warning.enabled"),
  boolUint8("truck.electric.enabled"),
  boolUint8("truck.engine.enabled"),
  boolUint8("truck.wipers.enabled"),

  boolUint8("truck.lights.blinker.left.enabled"),
  boolUint8("truck.lights.blinker.right.enabled"),
  boolUint8("truck.lights.blinker.left.active"),
  boolUint8("truck.lights.blinker.right.active"),
  boolUint8("truck.lights.parking.enabled"),
  boolUint8("truck.lights.beamLow.enabled"),
  boolUint8("truck.lights.beamHigh.enabled"),
  boolUint8("truck.lights.beacon.enabled"),
  boolUint8("truck.lights.brake.enabled"),
  boolUint8("truck.lights.reverse.enabled"),
  boolUint8("truck.lights.hazard.enabled"),

  boolUint8("truck.cruiseControl.enabled"),

  boolUint8("truck.wheels.onGround", wheelSize),

  boolUint8("truck.transmission.selector", 2),

  boolUint8("truck.differential.lock.enabled"),
  boolUint8("truck.liftAxle.enabled"),
  boolUint8("truck.liftAxle.indicator.enabled"),
  boolUint8("trailer.liftAxle.enabled"),
  boolUint8("trailer.liftAxle.indicator.enabled"),

  boolUint8("events.job.delivered.autoParked"),
  boolUint8("events.job.started.autoLoaded"),

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

  identityChar32("job.market"),
  identityChar32("events.fine.offence"),

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
  uint64le("events.job.cancelled.penalty"),
  uint64le("events.job.delivered.revenue"),
  uint64le("events.fine.amount"),
  uint64le("events.tollgate.amount"),
  uint64le("events.ferry.amount"),
  uint64le("events.train.amount"),

  _.padTo(4300),

  // 12th zone
  boolUint8("events.job.started.active"),
  boolUint8("events.job.finished.active"),
  boolUint8("events.job.cancelled.active"),
  boolUint8("events.job.delivered.active"),
  boolUint8("events.fine.active"),
  boolUint8("events.tollgate.active"),
  boolUint8("events.ferry.active"),
  boolUint8("events.train.active"),
  boolUint8("events.refuel.active"),
  boolUint8("events.refuelPaid.active"),
  
  _.padTo(4400),
  
  // 13th zone
  _.char("substances", stringSize, 16),

  _.padTo(6000),
  
  // 14th zone
  _.struct("trailers", [
    boolUint8("wheels.steerable", wheelSize),
    boolUint8("wheels.simulated", wheelSize),
    boolUint8("wheels.powered", wheelSize),
    boolUint8("wheels.liftable", wheelSize),
    boolUint8("wheels.onGround", wheelSize),

    boolUint8("attached"),

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

module.exports = pluginV11Structure