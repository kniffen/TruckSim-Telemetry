function parseData(data) {
  const output = {}

  fixPropNames(data, output)

  // Game
  output.game.sdkActive                 = convertIntToBool( output.game.sdkActive )
  output.game.version                   = parseFloat(`${output.game.version.major}.${output.game.version.minor}`)
  output.game.telemetryVersion          = parseFloat(`${output.game.telemetryVersion.major}.${output.game.telemetryVersion.minor}`)
  output.game.paused                    = convertIntToBool( output.game.paused )
  output.game.game                      = {id: output.game.game, name: ["unknown", "ets2", "ats"][output.game.game]}
  output.game.time                      = convertTime( output.game.time )

  const reducer = (a, b) => a + b
  output.game.renderTimestamp.value     = parseInt( output.game.renderTimestamp.value.reduce(reducer)     / 1000 )
  output.game.simulationTimestamp.value = parseInt( output.game.simulationTimestamp.value.reduce(reducer) / 1000 )
  output.game.timestamp.value           = parseInt( output.game.timestamp.value.reduce(reducer)           / 1000 )

  // Truck
  output.truck.speed                 = convertSpeed( output.truck.speed )
  output.truck.cruiseControl         = convertSpeed( output.truck.cruiseControl )
  output.truck.cruiseControl.enabled = convertIntToBool( output.truck.cruiseControl.enabled )
  output.truck.electric.enabled      = convertIntToBool( output.truck.electric.enabled )
  output.truck.wipers.enabled        = convertIntToBool( output.truck.wipers.enabled )

  // Truck: Engine
  output.truck.engine.enabled                          = convertIntToBool( output.truck.engine.enabled )
  output.truck.engine.oilPressure.warning.enabled      = convertIntToBool( output.truck.engine.oilPressure.warning.enabled )
  output.truck.engine.waterTemperature.warning.enabled = convertIntToBool( output.truck.engine.waterTemperature.warning.enabled )
  output.truck.engine.batteryVoltage.warning.enabled   = convertIntToBool( output.truck.engine.batteryVoltage.warning.enabled )

  // Truck: Transmission
  for ( let i = 0; i < output.truck.transmission.selector.length; i++ ) {
    output.truck.transmission.selector[i] = convertIntToBool( output.truck.transmission.selector[i] )
  }

  const tempSlots = []
  for ( let i = 0; i < 32; i++ ) {
    tempSlots.push({
      handlePosition: output.truck.transmission.slots.handlePosition[i],
      selector:       output.truck.transmission.slots.selector[i],
      gear:           output.truck.transmission.slots.gear[i]
    })
  }

  output.truck.transmission.slots = tempSlots

  // Truck: Brakes
  output.truck.brakes.parking.enabled               = convertIntToBool( output.truck.brakes.parking.enabled )
  output.truck.brakes.motor.enabled                 = convertIntToBool( output.truck.brakes.motor.enabled )
  output.truck.brakes.airPressure.warning.enabled   = convertIntToBool( output.truck.brakes.airPressure.warning.enabled )
  output.truck.brakes.airPressure.emergency.enabled = convertIntToBool( output.truck.brakes.airPressure.emergency.enabled )

  // Truck: Fuel
  output.truck.fuel.warning.enabled = convertIntToBool( output.truck.fuel.warning.enabled )

  // Truck: AdBlue
  output.truck.adBlue.warning.enabled = convertIntToBool( output.truck.adBlue.warning.enabled )

  // Truck: Lights
  output.truck.lights.blinker.left.enabled  = convertIntToBool( output.truck.lights.blinker.left.enabled )
  output.truck.lights.blinker.right.enabled = convertIntToBool( output.truck.lights.blinker.right.enabled )
  output.truck.lights.blinker.left.active   = convertIntToBool( output.truck.lights.blinker.left.active )
  output.truck.lights.blinker.right.active  = convertIntToBool( output.truck.lights.blinker.right.active )
  output.truck.lights.parking.enabled       = convertIntToBool( output.truck.lights.parking.enabled )
  output.truck.lights.beamLow.enabled       = convertIntToBool( output.truck.lights.beamLow.enabled )
  output.truck.lights.beamHigh.enabled      = convertIntToBool( output.truck.lights.beamHigh.enabled )
  output.truck.lights.beacon.enabled        = convertIntToBool( output.truck.lights.beacon.enabled )
  output.truck.lights.brake.enabled         = convertIntToBool( output.truck.lights.brake.enabled )
  output.truck.lights.reverse.enabled       = convertIntToBool( output.truck.lights.reverse.enabled )

  // Truck: Wheels
  const tempTruckWheels    = []
  for ( let i = 0; i < output.truck.wheels.count; i++ ) {
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
      steerable:      convertIntToBool( output.truck.wheels.steerable[i] ),
      simulated:      convertIntToBool( output.truck.wheels.simulated[i] ),
      powered:        convertIntToBool( output.truck.wheels.powered[i] ),
      liftable:       convertIntToBool( output.truck.wheels.liftable[i] ),
      onGround:       convertIntToBool( output.truck.wheels.onGround[i] ),
      damage:         output.truck.wheels.damage,
    })
  }
  output.truck.wheels = tempTruckWheels

  // Truck: Damage
  output.truck.damage = {
    cabin:        output.truck.cabin.damage,
    chassis:      output.truck.chassis.damage,
    engine:       output.truck.engine.damage,
    transmission: output.truck.transmission.damage,
    wheels:       output.truck.wheels.length ? output.truck.wheels[0].damage : 0
  }

  output.truck.damage.total = [
    output.truck.damage.cabin,
    output.truck.damage.chassis,
    output.truck.damage.engine,
    output.truck.damage.transmission,
    output.truck.damage.wheels,
  ].sort().reverse()[0]

  // Trailers
  const tmpTrailers = []
  for ( let i = 0; i < output.trailers.length; i++ ) {
    const tmpTrailer = {}
    fixPropNames( output.trailers[i], tmpTrailer )
    tmpTrailers.push( tmpTrailer )
  }

  for ( let i = 0; i < tmpTrailers.length; i++ ) {
    tmpTrailers[i].damage = {
      cargo:   tmpTrailers[i].cargo.damage,
      chassis: tmpTrailers[i].chassis.damage,
      wheels:  tmpTrailers[i].wheels.damage,
    }

    tmpTrailers[i].damage.total = [tmpTrailers[i].damage.chassis, tmpTrailers[i].damage.wheels].sort().reverse()[0]

    tmpTrailers[i].attached = convertIntToBool( tmpTrailers[i].attached )

    if ( !tmpTrailers[i].wheels ) continue

    const tmpTrailerWheels = []
    for ( let j = 0; j < tmpTrailers[i].wheels.count; j++ ) {
      tmpTrailerWheels.push({
        substance:      {
          id:    tmpTrailers[i].wheels.substance[j],
          name : output.substances[tmpTrailers[i].wheels.substance[j]]
        },
        lift:           tmpTrailers[i].wheels.lift[j],
        liftOffset:     tmpTrailers[i].wheels.liftOffset[j],
        radius:         tmpTrailers[i].wheels.radius[j],
        rotation:       tmpTrailers[i].wheels.rotation[j],
        steering:       tmpTrailers[i].wheels.steering[j],
        suspDeflection: tmpTrailers[i].wheels.suspDeflection[j],
        velocity:       tmpTrailers[i].wheels.velocity[j],
        liftable:       convertIntToBool( tmpTrailers[i].wheels.liftable[j] ),
        onGround:       convertIntToBool( tmpTrailers[i].wheels.onGround[j] ),
        powered:        convertIntToBool( tmpTrailers[i].wheels.powered[j] ),
        simulated:      convertIntToBool( tmpTrailers[i].wheels.simulated[j] ),
        steerable:      convertIntToBool( tmpTrailers[i].wheels.steerable[j] ),
        position: {
          X: tmpTrailers[i].wheels.position.X[j],
          Y: tmpTrailers[i].wheels.position.Y[j],
          Z: tmpTrailers[i].wheels.position.Z[j],
        }
      })
    }

    tmpTrailers[i].wheels   = tmpTrailerWheels
  }

  output.trailers = tmpTrailers
  output.trailer  = tmpTrailers[0]

  // Job
  output.job.expectedDeliveryTimestamp = convertTime( output.job.expectedDeliveryTimestamp, output.job.market == 'external_contracts' )
  
  output.job.cargo.isLoaded = convertIntToBool( output.job.cargo.isLoaded )
  output.job.isSpecial      = convertIntToBool( output.job.isSpecial )
  output.job.market = {
    id:   output.job.market,
    name: output.job.market != '' ? output.job.market.split( '_' ).map( ( [first, ...rest] ) => first.toUpperCase() + rest.join( '' ) ).join( ' ' ) : ''
  }
  
  output.job.plannedDistance.miles = Math.round( output.job.plannedDistance.km * 0.62137119223733 )

  // Job: Started
  output.events.job.started.autoLoaded = convertIntToBool( output.events.job.started.autoLoaded )

  // Job: Delivered
  output.events.job.delivered.autoParked    = convertIntToBool( output.events.job.delivered.autoParked )
  
  output.events.job.delivered.distance.miles = Math.round( output.events.job.delivered.distance.km * 0.62137119223733 )

  output.events.job.delivered.revenue   = output.events.job.delivered.revenue.reduce( ( a, b ) => a + b )
  output.events.job.delivered.timeTaken = output.events.job.delivered.timeTaken * 60000

  output.events.job.delivered.startedTimestamp   = convertTime( output.events.job.delivered.startedTimestamp )
  output.events.job.delivered.deliveredTimestamp = convertTime( output.events.job.delivered.deliveredTimestamp )

  // Job: Cancelled
  output.events.job.cancelled.penalty            = output.events.job.cancelled.penalty.reduce( ( a, b ) => a + b )
  output.events.job.cancelled.startedTimestamp   = output.events.job.delivered.startedTimestamp
  output.events.job.cancelled.cancelledTimestamp = output.events.job.delivered.deliveredTimestamp

  // Navigation
  output.navigation.speedLimit    = convertSpeed( output.navigation.speedLimit )
  output.navigation.nextRestStop  *= 60000
  output.navigation.time          *= 1000

  // Event triggers
  output.events.job.started.active   = convertIntToBool( output.events.job.started.active )
  output.events.job.finished.active  = convertIntToBool( output.events.job.finished.active )
  output.events.job.cancelled.active = convertIntToBool( output.events.job.cancelled.active )
  output.events.job.delivered.active = convertIntToBool( output.events.job.delivered.active )
  output.events.fine.active          = convertIntToBool( output.events.fine.active )
  output.events.tollgate.active      = convertIntToBool( output.events.tollgate.active )
  output.events.ferry.active         = convertIntToBool( output.events.ferry.active )
  output.events.train.active         = convertIntToBool( output.events.train.active )
  output.events.refuel.active        = convertIntToBool( output.events.refuel.active )
  output.events.refuelPaid.active    = convertIntToBool( output.events.refuelPaid.active )

  // Expenses
  output.events.fine.offence = {
    id:   output.events.fine.offence,
    name: output.events.fine.offence != '' ? output.events.fine.offence.split( '_' ).map( ( [first, ...rest] ) => first.toUpperCase() + rest.join( '' ) ).join( ' ' ) : ''
  }
  output.events.fine.amount     = output.events.fine.amount.reduce(     ( a, b ) => a + b )
  output.events.tollgate.amount = output.events.tollgate.amount.reduce( ( a, b ) => a + b )
  output.events.ferry.amount    = output.events.ferry.amount.reduce(    ( a, b ) => a + b )
  output.events.train.amount    = output.events.train.amount.reduce(    ( a, b ) => a + b )

  // Legacy/deprecated
  output.truck.brand         = output.truck.make
  output.events.ferry.target = output.events.ferry.destination
  output.events.train.target = output.events.train.destination
  output.trailer.brand       = output.trailer.make
  for ( let i = 0; i < output.trailers.length; i++ ) {
    output.trailers[i].brand = output.trailers[i].make
  }

  return output
}

function convertSpeed( input ) {
  if ( typeof input == "number" ) {
    input = { value: input }
  }

  if ( input.value < 0 ) {
    input.value = 0
  }

  input.kph = Math.round( Math.abs( input.value * 3.6  ) )
  input.mph = Math.round( Math.abs( input.value * 2.25 ) )

  return input
}

function convertIntToBool( int ) {
  return int == 1 ? true : false
}

function convertTime( value, isExternalContract ) {
  if ( isExternalContract ) return {value, unix: 0}

  const epoch = new Date( null )
  const day   = Math.floor( value / 1440 % 7 + 5 )

  epoch.setUTCDate( day )
  epoch.setUTCHours( Math.floor( value % 1440 / 60 ) )
  epoch.setUTCMinutes( Math.floor( value % 1440 % 60 ) )

  return {value, unix: epoch.valueOf()}
}

function fixPropNames( src, target ) {
  for ( const key in src ) {
    const subKeys = key.split( '.' )
    let tmpTarget = target
    
    for ( let i = 0; i < subKeys.length; i++ ) {
      if ( i < subKeys.length - 1 ) {
        ensurePropertyExists( tmpTarget, subKeys[i] )
        tmpTarget = tmpTarget[subKeys[i]]
      } else {
        ensurePropertyExists( tmpTarget, subKeys[i], src[key] )
      }
    }
  }
}

function ensurePropertyExists( target, property, value ) {
  if ( !target[property] ) {
    target[property] = value == undefined ? {} : value
  }
}

module.exports = parseData