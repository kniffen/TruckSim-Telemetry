const EventEmitter = require('events')

const functions = require('./functions')
const utils     = require('./utils')

function truckSimTelemetry(opts = {}) {
  const telemetry = {}

  telemetry.opts = utils.parseOptions(opts)

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

  telemetry.watch = (watchOpts, cb) => functions.watch(watchOpts, cb, telemetry)
  telemetry.stop  = () => functions.stop(telemetry)

  telemetry.getBuffer     = () => utils.getBuffer(telemetry.opts.mmfName)

  telemetry.getData       = () => functions.getData(null,         telemetry.opts)
  telemetry.getGame       = () => functions.getData('game',       telemetry.opts)
  telemetry.getControls   = () => functions.getData('controls',   telemetry.opts)
  telemetry.getJob        = () => functions.getData('job',        telemetry.opts)
  telemetry.getNavigation = () => functions.getData('navigation', telemetry.opts)
  telemetry.getTruck      = () => functions.getData('truck',      telemetry.opts)
  telemetry.getTrailers   = () => functions.getData('trailers',   telemetry.opts)
  telemetry.getTrailer    = () => functions.getData('trailer',    telemetry.opts)

  return telemetry
}

truckSimTelemetry.getBuffer     = (opts) => utils.getBuffer(utils.parseOptions(opts).mmfName)

truckSimTelemetry.getData       = (opts) => functions.getData(null,         utils.parseOptions(opts))
truckSimTelemetry.getGame       = (opts) => functions.getData('game',       utils.parseOptions(opts))
truckSimTelemetry.getControls   = (opts) => functions.getData('controls',   utils.parseOptions(opts))
truckSimTelemetry.getNavigation = (opts) => functions.getData('navigation', utils.parseOptions(opts))
truckSimTelemetry.getJob        = (opts) => functions.getData('job',        utils.parseOptions(opts))
truckSimTelemetry.getTruck      = (opts) => functions.getData('truck',      utils.parseOptions(opts))
truckSimTelemetry.getTrailers   = (opts) => functions.getData('trailers',   utils.parseOptions(opts))
truckSimTelemetry.getTrailer    = (opts) => functions.getData('trailer',    utils.parseOptions(opts))

module.exports = truckSimTelemetry