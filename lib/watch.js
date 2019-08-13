const equal = require('deep-equal')

const getData = require("./getData")

function watch(telemetry, opts = {}) {

  if (telemetry.watcher) return

  if (!opts.interval || typeof opts.interval !== "number" || opts.interval < 100) opts.interval = 100

  let previousData

  const setPreviousData = data => { previousData = data }
  
  watcher(telemetry, previousData, setPreviousData)
  telemetry.watcher = setInterval(() => watcher(telemetry, previousData, setPreviousData), opts.interval)

}

function watcher(telemetry, previousData, cb) {
  const data = getData()

  if (!data) return

  if (!previousData) return cb(data)

  // Game
  if (data.game && previousData.game) {
    if (!equal(data.game,      previousData.game))      telemetry.game.emit( "change",      data.game,      previousData.game )
    if (!equal(data.game.time, previousData.game.time)) telemetry.game.emit( "time-change", data.game.time, previousData.game.time )
  }

  // Truck
  if (data.truck && previousData.truck) {
    if (!equal(data.truck,              previousData.truck))                           telemetry.truck.emit( "change", data.truck,              previousData.truck )
    if (!equal(data.truck.fuel,         previousData.truck.fuel))                 telemetry.truck.fuel.emit( "change", data.truck.fuel,         previousData.truck.fuel )
    if (!equal(data.truck.adBlue,       previousData.truck.adBlue))             telemetry.truck.adBlue.emit( "change", data.truck.adBlue,       previousData.truck.adBlue )
    if (!equal(data.truck.engine,       previousData.truck.engine))             telemetry.truck.engine.emit( "change", data.truck.engine,       previousData.truck.engine )
    if (!equal(data.truck.transmission, previousData.truck.transmission)) telemetry.truck.transmission.emit( "change", data.truck.transmission, previousData.truck.transmission )
    if (!equal(data.truck.brakes,       previousData.truck.brakes))             telemetry.truck.brakes.emit( "change", data.truck.brakes,       previousData.truck.brakes )
    if (!equal(data.truck.wheels,       previousData.truck.wheels))             telemetry.truck.wheels.emit( "change", data.truck.wheels,       previousData.truck.wheels )
    if (!equal(data.truck.lights,       previousData.truck.lights))             telemetry.truck.lights.emit( "change", data.truck.lights,       previousData.truck.lights )
    if (!equal(data.truck.cabin,        previousData.truck.cabin))               telemetry.truck.cabin.emit( "change", data.truck.cabin,        previousData.truck.cabin )
    if (!equal(data.truck.chassis,      previousData.truck.chassis))           telemetry.truck.chassis.emit( "change", data.truck.chassis,      previousData.truck.chassis )
    if (!equal(data.truck.position,     previousData.truck.position))         telemetry.truck.position.emit( "change", data.truck.position,     previousData.truck.position )
    if (!equal(data.truck.orientation,  previousData.truck.orientation))   telemetry.truck.orientation.emit( "change", data.truck.orientation,  previousData.truck.orientation )
  }

  // Trailers
  if (data.trailers && previousData.trailers) {
    if (!equal(data.trailers, previousData.trailers)) telemetry.trailers.emit( "change", data.trailers, previousData.trailers )
  }

  // Trailer
  if (data.trailer && previousData.trailer) {
    if (!equal(data.trailer, previousData.trailer)) telemetry.trailer.emit( "change", data.trailer, previousData.trailer )
  }

  // Job
  if (data.job && previousData.job) {
    if (!equal(data.job, previousData.job)) telemetry.job.emit( "change", data.job, previousData.job )
  }
  
  // Navigation
  if (data.navigation && previousData.navigation) {
    if (!equal(data.navigation, previousData.navigation)) telemetry.navigation.emit( "change", data.navigation, previousData.navigation )
  }

  // Controls
  if (data.controls && previousData.controls) {
    if (!equal(data.controls, previousData.controls)) telemetry.controls.emit( "change", data.controls, previousData.controls )
  }

  // Events
  if (data.events && previousData.events) {
    if (!equal(data.events, previousData.events)) telemetry.events.emit( "change", data.events, previousData.events )
  }

  return cb(data)

}

module.exports = watch