const EventEmitter = require("events")

const watch     = require("./watch")
const stop      = require("./stop")
const getBuffer = require("./getBuffer")
const getData   = require("./getData")

function truckSimTelemetry() {
  const telemetry = {}

  telemetry.game  = new EventEmitter()

  telemetry.truck              = new EventEmitter()
  telemetry.truck.fuel         = new EventEmitter()
  telemetry.truck.adBlue       = new EventEmitter()
  telemetry.truck.engine       = new EventEmitter()
  telemetry.truck.transmission = new EventEmitter()
  telemetry.truck.brakes       = new EventEmitter()
  telemetry.truck.wheels       = new EventEmitter()
  telemetry.truck.lights       = new EventEmitter()
  telemetry.truck.cabin        = new EventEmitter()
  telemetry.truck.chassis      = new EventEmitter()
  telemetry.truck.position     = new EventEmitter()
  telemetry.truck.orientation  = new EventEmitter()

  telemetry.trailers   = new EventEmitter()
  telemetry.trailer    = new EventEmitter()
  telemetry.job        = new EventEmitter()
  telemetry.navigation = new EventEmitter()
  telemetry.controls   = new EventEmitter()
  telemetry.events     = new EventEmitter()

  telemetry.watch = opts => watch(telemetry, opts)
  telemetry.stop  = ()   => stop(telemetry)

  telemetry.getBuffer     = getBuffer
  telemetry.getData       = () => getData()
  telemetry.getGame       = () => getDataProperty("game")
  telemetry.getTruck      = () => getDataProperty("truck")
  telemetry.getTrailers   = () => getDataProperty("trailers")
  telemetry.getTrailer    = () => getDataProperty("trailer")
  telemetry.getJob        = () => getDataProperty("job")
  telemetry.getNavigation = () => getDataProperty("navigation")
  telemetry.getControls   = () => getDataProperty("controls")
  
  return telemetry

}

truckSimTelemetry.getBuffer     = getBuffer
truckSimTelemetry.getData       = () => getData()
truckSimTelemetry.getGame       = () => getDataProperty("game")
truckSimTelemetry.getTruck      = () => getDataProperty("truck")
truckSimTelemetry.getTrailers   = () => getDataProperty("trailers")
truckSimTelemetry.getTrailer    = () => getDataProperty("trailer")
truckSimTelemetry.getJob        = () => getDataProperty("job")
truckSimTelemetry.getNavigation = () => getDataProperty("navigation")
truckSimTelemetry.getControls   = () => getDataProperty("controls")

function getDataProperty(property) {
  const data = getData()

  if (data && data[property]) return data[property]
}

module.exports = truckSimTelemetry