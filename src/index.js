function truckSimTelemetry(
  setInterval,
  clearInterval,
  EventEmitter,
  scsSDKTelemetry, 
  converters, 
  eventEmitters,
  getBuffer, 
  getData, 
  getPluginVersion, 
  parseData, 
  watch, 
  stop
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

  telemetry.watch = (opts, cb) => watch(setInterval, scsSDKTelemetry, converters, eventEmitters, telemetry, getBuffer, getData, getPluginVersion, parseData, opts, cb)
  telemetry.stop  = ()         => stop(clearInterval, telemetry)

  telemetry.getBuffer     = () => getBuffer(scsSDKTelemetry)
  telemetry.getData       = () => getData(null,         scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
  telemetry.getControls   = () => getData("controls",   scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
  telemetry.getGame       = () => getData("game",       scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
  telemetry.getJob        = () => getData("job",        scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
  telemetry.getNavigation = () => getData("navigation", scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
  telemetry.getTrailers   = () => getData("trailers",   scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
  telemetry.getTrailer    = () => getData("trailer",    scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
  telemetry.getTruck      = () => getData("truck",      scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)


  return telemetry
}

module.exports = truckSimTelemetry