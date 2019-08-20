import _EventEmitter from "events"
import _getBuffer    from "./getBuffer"
import _getData      from "./getData"
import _watch        from "./watch"
import _stop         from "./stop"

function truckSimTelemetry(
  ignore,
  EventEmitter = _EventEmitter,
  getBuffer    = _getBuffer,
  getData      = _getData,
  watch        = _watch,
  stop         = _stop
) {
  
  const telemetry = {}

  telemetry.game       = new EventEmitter()
  telemetry.job        = new EventEmitter()
  telemetry.navigation = new EventEmitter()
  telemetry.trailers   = new EventEmitter()
  telemetry.trailer    = new EventEmitter()
  telemetry.truck      = new EventEmitter()

  telemetry.data = {
    controls:   {},
    game:       {},
    job:        {},
    navigation: {},
    trailers:   {},
    trailer:    {},
    truck:      {},
  }

  telemetry.watch = (opts, cb) => watch(telemetry, opts, cb)
  telemetry.stop  = ()         => stop(telemetry)

  telemetry.getBuffer     = getBuffer
  telemetry.getData       = getData
  telemetry.getControls   = () => getDataProperty("controls")
  telemetry.getGame       = () => getDataProperty("game")
  telemetry.getJob        = () => getDataProperty("job")
  telemetry.getNavigation = () => getDataProperty("navigation")
  telemetry.getTrailers   = () => getDataProperty("trailers")
  telemetry.getTrailer    = () => getDataProperty("trailer")
  telemetry.getTruck      = () => getDataProperty("truck")

  return telemetry
}

function getDataProperty(property) {
  const data = _getData()

  if (data && data[property]) return data[property]
}

truckSimTelemetry.getBuffer     = _getBuffer
truckSimTelemetry.getData       = () => _getData()
truckSimTelemetry.getControls   = () => getDataProperty("controls")
truckSimTelemetry.getGame       = () => getDataProperty("game")
truckSimTelemetry.getJob        = () => getDataProperty("job")
truckSimTelemetry.getNavigation = () => getDataProperty("navigation")
truckSimTelemetry.getTrailers   = () => getDataProperty("trailers")
truckSimTelemetry.getTrailer    = () => getDataProperty("trailer")
truckSimTelemetry.getTruck      = () => getDataProperty("truck")

export default truckSimTelemetry