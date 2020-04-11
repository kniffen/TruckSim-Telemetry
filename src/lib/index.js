import EventEmitter from "events"

import watch from "./watch"
import stop  from "./stop"

import getBuffer from "./getBuffer"
import getData   from "./getData"

export default function truckSimTelemetry() {
  const telemetry = new Object()

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

  telemetry.watch = (opts, cb) => watch(opts, cb, telemetry)
  telemetry.stop  = ()         => stop(telemetry)

  telemetry.getBuffer     = getBuffer
  telemetry.getData       = getData
  telemetry.getGame       = () => getData("game")
  telemetry.getControls   = () => getData("controls")
  telemetry.getJob        = () => getData("job")
  telemetry.getNavigation = () => getData("navigation")
  telemetry.getTruck      = () => getData("truck")
  telemetry.getTrailers   = () => getData("trailers")
  telemetry.getTrailer    = () => getData("trailer")

  return telemetry
}