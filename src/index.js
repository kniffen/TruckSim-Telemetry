import EventEmitter from "events"

import watch from "./watch"
import stop  from "./stop"

import getBuffer    from "./getBuffer"
import getData      from "./getData"
import parseOptions from "./parseOptions"

export default function truckSimTelemetry(opts = {}) {
  const telemetry = new Object()

  telemetry.opts = parseOptions(opts)

  telemetry.game       = new EventEmitter()
  telemetry.job        = new EventEmitter()
  telemetry.navigation = new EventEmitter()
  telemetry.trailers   = new EventEmitter()
  telemetry.trailer    = new EventEmitter()
  telemetry.truck      = new EventEmitter()

  telemetry.data = {
    controls:   new Object(),
    game:       new Object(),
    job:        new Object(),
    navigation: new Object(),
    trailers:   new Object(),
    trailer:    new Object(),
    truck:      new Object(),
  }

  telemetry.watch = (watchOpts, cb) => watch(watchOpts, cb, telemetry)
  telemetry.stop  = ()              => stop(telemetry)

  telemetry.getBuffer     = () => getBuffer(telemetry.opts)
  telemetry.getData       = () => getData(null,         telemetry.opts)
  telemetry.getGame       = () => getData("game",       telemetry.opts)
  telemetry.getControls   = () => getData("controls",   telemetry.opts)
  telemetry.getJob        = () => getData("job",        telemetry.opts)
  telemetry.getNavigation = () => getData("navigation", telemetry.opts)
  telemetry.getTruck      = () => getData("truck",      telemetry.opts)
  telemetry.getTrailers   = () => getData("trailers",   telemetry.opts)
  telemetry.getTrailer    = () => getData("trailer",    telemetry.opts)

  return telemetry
}