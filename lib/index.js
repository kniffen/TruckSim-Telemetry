const EventEmitter = require('events')

const watch = require('./watch')
const stop  = require('./stop')

const getBuffer    = require('./getBuffer')
const getData      = require('./getData')
const parseOptions = require('./parseOptions')

function truckSimTelemetry(opts = {}) {
  const telemetry = {}

  telemetry.opts = parseOptions(opts)

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
    trailers:   [],
    trailer:    {},
    truck:      {},
  }

  telemetry.watcher = null

  telemetry.watch = (watchOpts, cb) => watch(watchOpts, cb, telemetry)
  telemetry.stop  = () => stop(telemetry)

  telemetry.getBuffer     = () => getBuffer(telemetry.opts)

  telemetry.getData       = () => getData(null,         telemetry.opts)
  telemetry.getGame       = () => getData('game',       telemetry.opts)
  telemetry.getControls   = () => getData('controls',   telemetry.opts)
  telemetry.getJob        = () => getData('job',        telemetry.opts)
  telemetry.getNavigation = () => getData('navigation', telemetry.opts)
  telemetry.getTruck      = () => getData('truck',      telemetry.opts)
  telemetry.getTrailers   = () => getData('trailers',   telemetry.opts)
  telemetry.getTrailer    = () => getData('trailer',    telemetry.opts)

  return telemetry
}

truckSimTelemetry.getBuffer     = (opts) => getBuffer(parseOptions(opts))

truckSimTelemetry.getData       = (opts) => getData(null,         parseOptions(opts))
truckSimTelemetry.getGame       = (opts) => getData('game',       parseOptions(opts))
truckSimTelemetry.getControls   = (opts) => getData('controls',   parseOptions(opts))
truckSimTelemetry.getNavigation = (opts) => getData('navigation', parseOptions(opts))
truckSimTelemetry.getJob        = (opts) => getData('job',        parseOptions(opts))
truckSimTelemetry.getTruck      = (opts) => getData('truck',      parseOptions(opts))
truckSimTelemetry.getTrailers   = (opts) => getData('trailers',   parseOptions(opts))
truckSimTelemetry.getTrailer    = (opts) => getData('trailer',    parseOptions(opts))

module.exports = truckSimTelemetry