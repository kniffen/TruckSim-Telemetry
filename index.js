const EventEmitter = require("events")

const scsSDKTelemetry   = require("./build/Release/scsSDKTelemetry")
const _truckSimTelemetry = require("./dist")

const converters    = require("./dist/converters")
const eventEmitters = require("./dist/eventEmitters")

const getBuffer        = require("./dist/getBuffer")
const getData          = require("./dist/getData")
const getPluginVersion = require("./dist/getPluginVersion")
const parseData        = require("./dist/parseData")
const watch            = require("./dist/watch")
const stop             = require("./dist/stop")

const truckSimTelemetry = () => _truckSimTelemetry(
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
)

truckSimTelemetry.getBuffer     = () => getBuffer(scsSDKTelemetry)
truckSimTelemetry.getData       = () => getData(null,         scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
truckSimTelemetry.getControls   = () => getData("controls",   scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
truckSimTelemetry.getGame       = () => getData("game",       scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
truckSimTelemetry.getJob        = () => getData("job",        scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
truckSimTelemetry.getNavigation = () => getData("navigation", scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
truckSimTelemetry.getTrailers   = () => getData("trailers",   scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
truckSimTelemetry.getTrailer    = () => getData("trailer",    scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)
truckSimTelemetry.getTruck      = () => getData("truck",      scsSDKTelemetry, converters, getBuffer, getPluginVersion, parseData)

module.exports = truckSimTelemetry