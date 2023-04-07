function ensurePropertyExists( target, property, value ) {
  if ( !target[property] ) {
    target[property] = value === undefined ? {} : value
  }
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

function parseData(data) {
  const output = {}

  fixPropNames(data, output)

  // Truck
  output.truck.transmission.slots = (new Array(32)).fill(null).map((_, i) => ({
    handlePosition: output.truck.transmission.slots.handlePosition[i],
    selector:       output.truck.transmission.slots.selector[i],
    gear:           output.truck.transmission.slots.gear[i]
  }))

  // Truck: Wheels
  output.truck.wheels = (new Array(output.truck.wheels.count)).fill(null).map((_, i) => ({
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
    steerable:      output.truck.wheels.steerable[i],
    simulated:      output.truck.wheels.simulated[i],
    powered:        output.truck.wheels.powered[i],
    liftable:       output.truck.wheels.liftable[i],
    onGround:       output.truck.wheels.onGround[i],
    damage:         output.truck.wheels.damage,
  }))

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
  output.trailers =
    output.trailers
      .reduce((trailers, data) => {
        const trailer = {}
        fixPropNames(data, trailer)
        return [...trailers, trailer]
      }, [])

  output.trailers.forEach((trailer) => {
    trailer.damage = {
      cargo: trailer.cargo.damage,
      chassis: trailer.chassis.damage,
      wheels: trailer.wheels.damage
    }

    if (12 <= output.game.pluginVersion)
      trailer.damage.body = trailer.body.damage

    trailer.damage.total = [
      trailer.damage.chassis,
      trailer.damage.wheels,
      trailer.damage.body || 0,
    ].reduce((num, next) => next > num ? next : num, 0)

    if (11 <= output.game.pluginVersion)
      trailer.liftAxle = output.trailer.liftAxle

    trailer.wheels = (new Array(trailer.wheels.count)).fill(null).map((_, j) => ({
      substance:      {
        id:    trailer.wheels.substance[j],
        name : output.substances[trailer.wheels.substance[j]]
      },
      lift:           trailer.wheels.lift[j],
      liftOffset:     trailer.wheels.liftOffset[j],
      radius:         trailer.wheels.radius[j],
      rotation:       trailer.wheels.rotation[j],
      steering:       trailer.wheels.steering[j],
      suspDeflection: trailer.wheels.suspDeflection[j],
      velocity:       trailer.wheels.velocity[j],
      liftable:       trailer.wheels.liftable[j],
      onGround:       trailer.wheels.onGround[j],
      powered:        trailer.wheels.powered[j],
      simulated:      trailer.wheels.simulated[j],
      steerable:      trailer.wheels.steerable[j],
      position: {
        X: trailer.wheels.position.X[j],
        Y: trailer.wheels.position.Y[j],
        Z: trailer.wheels.position.Z[j],
      }
    }))
  })

  output.trailer = output.trailers[0]

  // Job: Cancelled
  output.events.job.cancelled.startedTimestamp   = output.events.job.delivered.startedTimestamp
  output.events.job.cancelled.cancelledTimestamp = output.events.job.delivered.deliveredTimestamp

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

module.exports = parseData
